import React from 'react';
import { Checkbox } from 'react-native-paper';
import PropTypes from 'prop-types';

import { colors } from '../../theme/colors';

interface ISimpleCheckBoxProps {
  status: boolean;
  setCheck: (text: boolean) => void;
}

const SimpleCheckBox: React.FC<ISimpleCheckBoxProps> = ({ status, setCheck }) => {
  return (
    <Checkbox
      status={status ? 'checked' : 'unchecked'}
      color={colors.gray}
      uncheckedColor={colors.gray}
      onPress={() => {
        setCheck(!status);
      }}
    />
  );
};

SimpleCheckBox.propTypes = {
  status: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired
};

export default SimpleCheckBox;
