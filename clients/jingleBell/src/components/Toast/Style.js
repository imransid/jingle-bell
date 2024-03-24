import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 0,
    width: '90%',
    padding: 10,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  toastText: {
    marginLeft: 14,
    fontSize: 16
  },
  toastIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  successToastContainer: {
    backgroundColor: '#def1d7',
    borderColor: '#1f8722'
  },
  warningToastContainer: {
    backgroundColor: '#fef7ec',
    borderColor: '#f08135'
  },
  errorToastContainer: {
    backgroundColor: '#fae1db',
    borderColor: '#d9100a'
  },
  successToastText: {
    color: '#1f8722'
  },
  warningToastText: {
    color: '#f08135'
  },
  errorToastText: {
    color: '#d9100a'
  }
});

export default styles;
