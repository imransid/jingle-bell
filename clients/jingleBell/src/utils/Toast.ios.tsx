import Toast from 'react-native-simple-toast';

const ToastPopUpIOS = (msg: string): void => {

    Toast.showWithGravity(
        msg,
        Toast.LONG,
        Toast.BOTTOM,
    );
};

export default ToastPopUpIOS;
