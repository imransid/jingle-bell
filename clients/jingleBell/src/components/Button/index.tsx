import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { EButtonType } from '@/app-enum';

import { colors } from '../../theme/colors';
import { TextItem } from '..';

import Styles from './Styles';

interface ICustomTextInputProps {
  txt: string;
  type?: string;
  pressFunction?: () => void;
}

const CustomButtonItem: React.FC<ICustomTextInputProps> = ({
  txt,
  type = EButtonType.GreenBtn,
  pressFunction
}) => (
  <TouchableOpacity
    style={type === EButtonType.GreenBtn ? Styles.buttonGreen : Styles.buttonWhite}
    onPress={pressFunction}>
    <TextItem txt={txt} color={type === EButtonType.GreenBtn ? colors.white : colors.primary} />
  </TouchableOpacity>
);

export default CustomButtonItem;
