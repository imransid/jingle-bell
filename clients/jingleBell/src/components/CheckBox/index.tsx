import React from 'react';
import { Col, Row } from 'react-native-easy-grid';
import { Checkbox, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

import { colors } from '../../theme/colors';

import Styles from './Styles';
interface ICustomCheckBoxProps {
  status: boolean;
  setCheck: (text: boolean) => void;
}

const CustomCheckBox: React.FC<ICustomCheckBoxProps> = ({ status, setCheck }) => {
  return (
    <Row style={Styles.input}>
      <Col style={Styles.ckhBoxItemBox}>
        <Checkbox
          status={status ? 'checked' : 'unchecked'}
          color={colors.gray}
          uncheckedColor={colors.gray}
          onPress={() => {
            setCheck(!status);
          }}
        />
      </Col>
      <Col style={Styles.rememberMeTxt}>
        <Text>Remember me</Text>
      </Col>
    </Row>
  );
};

CustomCheckBox.propTypes = {
  status: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired
};

export default CustomCheckBox;
