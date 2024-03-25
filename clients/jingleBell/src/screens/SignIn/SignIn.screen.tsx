import React, { useCallback, useRef, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import BackgroundImage from "../../components/BackgroundImage"; // Assuming the component file is in the same directory
import { Grid, Row, Col } from "react-native-easy-grid"
import { TextInput, TextItem, Button, Toast } from '@/components'; //  Button
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '@/theme/colors';
import { CustomTouchable } from '@/components/TouchableHandler';
import { yupResolver } from '@hookform/resolvers/yup';
import { mobileSignInFormValidation } from '@/utils/formValidation';
import { Controller, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client'
import PopupModal from '@/components/PopupModal/PopupModal';
import { ACTIVATE_USER } from '@/store/grpahql/actions/activation.action';
import ToastPopUpIOS from '@/utils/Toast.ios';
import { AUTH_USER } from '@/store/grpahql/actions/login.action';
import { IToastRef } from '@/components/Toast';
interface ISignUpFormData {
  email: string;
  password: string;

}

const throttle = (func: any, delay: number) => {
  let throttling = false;
  return (...args: any) => {
    if (!throttling) {
      throttling = true;
      func(...args);
      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
};
export default function App() {
  const toastRef = useRef<IToastRef | null>(null);
  const [loginMutation, { loading, error, data }] = useMutation(AUTH_USER)
  const imageUri = 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80';


  const IconMedia = ({ name, color, size = 30 }: { name: string, color: string, size: number }) => <Icon name={name} size={size} color={color} />;

  const onPassItem = useCallback(
    throttle(async (value: any) => {
      console.log("Value passed:", value);
      // You can use the passed value as needed
    }, 300),
    []
  );

  // yap validation
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(mobileSignInFormValidation),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // onsubmit
  const onSubmit: SubmitHandler<ISignUpFormData> = async (formData: ISignUpFormData): Promise<void> => {
    try {
      let data = {
        email: formData.email,
        password: formData.password
      }
      console.log('data', data)
      const response = await loginMutation({
        variables: data
      })

      if (response?.data?.login?.accessToken !== undefined) {
        ToastPopUpIOS('Login successfully.!')
        // setToken(response?.data?.register?.activation_token)
        // setIsVisible(true)
      } else {
        // console.log('response', response)
        toastRef.current?.show({
          type: 'error',
          text: 'Something went wrong. Please Try again later.',
          duration: 2000
        });
      }


    } catch (err) {
      console.error('error', err);
    }
  };


  return (
    <BackgroundImage imageUri={imageUri}>
      <Grid>
        <Toast ref={toastRef} />
        <Row style={{ height: '20%' }}></Row>
        <Row style={Styles.radiosRow}>
          <View style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <Row>
                <TextItem txt={"I'm hungry, I need good meals"} color='#064706' variant='headlineLarge' fontWeight='600' />
              </Row>

              <Row style={Styles.item}>
                <Col>
                  <Row style={Styles.label}>
                    <TextItem txt={"Your Email"} color='#064706' variant='labelLarge' fontWeight='600' />
                    {errors.email != null && <Text style={Styles.errorTxt}>   *{errors.email.message}</Text>}
                  </Row>
                  <Row>
                    <Controller
                      control={control}
                      rules={{
                        required: true
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          value={value}
                          onChangeText={onChange}
                          placeholder="Email"
                        />
                      )}
                      name="email"
                    />
                  </Row>
                </Col>
              </Row>

              <Row style={Styles.item}>
                <Col>
                  <Row style={Styles.label}>
                    <TextItem txt={"Password"} color='#064706' variant='labelLarge' fontWeight='600' />
                    {errors.password != null && <Text style={Styles.errorTxt}>   *{errors.password.message}</Text>}
                  </Row>
                  <Row>
                    <Controller
                      control={control}
                      rules={{
                        required: true
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          value={value}
                          onChangeText={onChange}
                          placeholder="Password"
                        />
                      )}
                      name="password"
                    />
                  </Row>
                </Col>
              </Row>

              <Row style={Styles.item}>
                <Col>
                  <View style={{ width: '100%', height: 10 }}></View>
                  <Row>
                    <Button pressFunction={() => handleSubmit(onSubmit)()} txt={'LogIn'} type='green' />
                  </Row>
                  <View style={{ width: '100%', height: 10 }}></View>
                  <Row>
                    <Button txt={'Sign Up'} type='white' />
                  </Row>
                </Col>
              </Row>

              <Row style={Styles.item}>
                <Col>
                  <Row style={Styles.allCenter}>
                    <TextItem txt={"OR Join With"} color='#064706' variant='labelLarge' fontWeight='600' />
                  </Row>
                  <Row style={Styles.allCenter}>
                    <View style={Styles.iconView}>
                      <CustomTouchable onPress={() => onPassItem("facebook")}>
                        <View style={Styles.icon}>
                          <IconMedia name="facebook" color={colors.blue} size={22} />
                        </View>
                      </CustomTouchable>
                      <CustomTouchable onPress={() => onPassItem("google")}>
                        <View style={Styles.icon}>
                          <IconMedia name="google" color={colors.darkGray} size={22} />
                        </View>
                      </CustomTouchable>
                      <CustomTouchable onPress={() => onPassItem("instagram")}>
                        <View style={Styles.icon}>
                          <IconMedia name="instagram" color={colors.pink} size={22} />
                        </View>
                      </CustomTouchable>
                      <CustomTouchable onPress={() => onPassItem("whatsapp")}>
                        <View style={Styles.icon}>
                          <IconMedia name="whatsapp" color={colors.primary} size={22} />
                        </View>
                      </CustomTouchable>
                    </View>
                  </Row>
                </Col>
              </Row>

            </ScrollView>
          </View>
        </Row>
      </Grid>
    </BackgroundImage>
  );
}
