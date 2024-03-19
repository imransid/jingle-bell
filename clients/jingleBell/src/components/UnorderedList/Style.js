import { scale, ScaledSheet } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: scale(10)
  },
  TextCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  item: {
    width: '100%',
    // padding: 20,
    marginVertical: 2
    // marginHorizontal: 16
  },
  icon: {
    width: 18,
    paddingTop: 4
  }
});

export default Styles;
