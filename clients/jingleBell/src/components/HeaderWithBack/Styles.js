import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    height: verticalScale(60),
    width: '100%',
    // padding: scale(15),
    paddingTop: scale(15),
    paddingHorizontal: scale(20)
  },
  TextCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  }
});

export default Styles;
