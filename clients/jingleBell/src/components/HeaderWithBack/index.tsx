import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';

import { Back } from '@/assets';
import { TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';

interface ICustomTextInputProps {
  txt: string;
}

const CustomHeaderWithBack: React.FC<ICustomTextInputProps> = ({ txt }) => {
  const navigation = useNavigation();

  return (
    <Row style={Styles.container}>
      <Col style={Styles.justifyCenter}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Back />
        </TouchableOpacity>
      </Col>
      <Col style={Styles.TextCenter}>
        <TextItem txt={txt} variant="titleLarge" fontWeight={'bold'} color={colors.black} />
      </Col>
      <Col></Col>
    </Row>
  );
};

export default CustomHeaderWithBack;
