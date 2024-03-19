import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  input: {
    height: verticalScale(50),
    width: '100%',
    fontSize: verticalScale(16)
  },
  ckhBoxItemBox: {
    width: scale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rememberMeTxt: {
    justifyContent: 'center'
  }
});

export default Styles;
