import React, { useCallback, useState, useRef } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import BackgroundImage from "../../components/BackgroundImage"; // Assuming the component file is in the same directory
import { Grid, Row, Col } from "react-native-easy-grid"
import { TextInput, TextItem, Button, Toast } from '@/components'; //  Button
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '@/theme/colors';
import { CustomTouchable } from '@/components/TouchableHandler';
import { yupResolver } from '@hookform/resolvers/yup';
import { mobileSignUpFormValidation } from '@/utils/formValidation';
import { Controller, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '@/store/grpahql/actions/register.action';
import PopupModal from '@/components/PopupModal/PopupModal';
import { ACTIVATE_USER } from '@/store/grpahql/actions/activation.action';
import ToastPopUpIOS from '@/utils/Toast.ios';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { IToastRef } from '@/components/Toast';
interface ISignUpFormData {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
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
export default function App({ navigation }: any) {
  const toastRef = useRef<IToastRef | null>(null);
  const [registerMutation, { loading, error, data }] = useMutation(REGISTER_USER)
  const [activateMutation, { loading: isLoading, error: isError, data: isData }] = useMutation(ACTIVATE_USER)
  const imageUri = 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80';
  const [isVisible, setIsVisible] = useState(false);
  const [OtpValue, setOtpValue] = useState('');
  const [token, setToken] = useState('');

  const IconMedia = ({ name, color, size = 30 }: { name: string, color: string, size: number }) => <Icon name={name} size={size} color={color} />;

  const onPassItem = useCallback(
    throttle(async (value: any) => {
      console.log("Value passed:", value);
      // You can use the passed value as needed
    }, 300),
    []
  );

  const onSubmitItem = useCallback(
    throttle(async () => {
      console.log("Value passed:", token, OtpValue);

      try {

        let data = {
          activationToken: token,
          activationCode: OtpValue
        }


        const response = await activateMutation({
          variables: data
        })


        if (response?.data?.activateUser?.user !== undefined) {
          ToastPopUpIOS('activation successfully.!')
          setIsVisible(false);
          navigation.navigate('SignInScreen',);

        } else {
          console.log('response', response)
        }


      } catch (err) {
        console.error('error', err);
      }
    }, 300),
    [token, OtpValue]
  );


  // yap validation
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(mobileSignUpFormValidation),
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      phoneNumber: ''
    }
  });

  // onsubmit
  const onSubmit: SubmitHandler<ISignUpFormData> = async (formData: ISignUpFormData): Promise<void> => {
    try {

      let data = {
        name: formData.userName,
        email: formData.email,
        password: formData.password,
        phone_number: parseFloat(formData.phoneNumber)
      }


      const response = await registerMutation({
        variables: data
      })


      if (response?.data?.register?.activation_token !== undefined) {
        setToken(response?.data?.register?.activation_token)
        setIsVisible(true)
      } else {
        console.log('response', response)
      }


    } catch (err) {
      console.error('error', err);
    }
  };


  return (
    <BackgroundImage imageUri={imageUri}>
      <Toast ref={toastRef} />
      <Grid>
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
                    <TextItem txt={"Full Name"} color='#064706' variant='labelLarge' fontWeight='600' />
                    {errors.userName != null && <Text style={Styles.errorTxt}>   *{errors.userName.message}</Text>}
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
                          placeholder="Full Name"
                        />
                      )}
                      name="userName"
                    />

                  </Row>
                </Col>
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
                    <TextItem txt={"Phone Number"} color='#064706' variant='labelLarge' fontWeight='600' />
                    {errors.phoneNumber != null && <Text style={Styles.errorTxt}>   *{errors.phoneNumber.message}</Text>}
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
                          placeholder="Phone Number"
                        />
                      )}
                      name="phoneNumber"
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
                  <Row>
                    <Button pressFunction={() => {
                      toastRef.current?.show({
                        type: 'warning',
                        text: 'Success Toast',
                        duration: 9000
                      });
                    }

                      //  handleSubmit(onSubmit)()

                    } txt={'Create Account'} type='green' />
                  </Row>
                  <Row>
                    <Button txt={'Sign in'} type='white' />
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
              <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
                <View style={Styles.card}>
                  <TextItem txt={"Enter Code "} color='#ecf2ec' variant='titleMedium' fontWeight='600' />
                  <View style={{ width: '100%', height: 10 }}></View>
                  <TextInput
                    value={OtpValue}
                    onChangeText={(e) => setOtpValue(e)}
                    placeholder="Enter Code Here"
                  />
                  <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <CustomTouchable onPress={onSubmitItem}>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 25, justifyContent: 'center' }}>
                          <TextItem txt='Submit ' color={'#ecf2ec'} variant='titleMedium' fontWeight='600' />
                        </View>
                        <View style={[Styles.icon, { justifyContent: 'center' }]}>
                          <IconMedia name="send" color={colors.linkWater} size={12} />
                        </View>
                      </View>
                    </CustomTouchable>
                  </View>
                </View>
              </PopupModal>
            </ScrollView>
          </View>
        </Row>
      </Grid>
    </BackgroundImage>
  );
}
