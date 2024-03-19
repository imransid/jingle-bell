import { Dimensions } from 'react-native';
import { moderateScale, scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const ScreenHeight = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

const Styles = ScaledSheet.create({
  item: {
    height: '93@s'
  },
  label: {
    height: '30@s',
    alignItems: 'center'
  },
  icon: {
    height: '25@s',
    width: '25@s'
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    paddingBottom: '25@s'
  },
  radiosRow: {
    backgroundColor: '#fff',
    borderTopRightRadius: '30@s',
    borderTopLeftRadius: '30@s',
    width: width,
    padding: '15@s'
  },
  errorTxt: {
    color: colors.red
  }
});

export default Styles;
