import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Text, Image, Platform } from 'react-native';
import styles from './Style';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSequence,
    withDelay,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';

// success
// warning
// error

export interface IToastRef {
    show: ({ type, text, duration }: { type: string; text: string; duration: number }) => void;
}

export interface IShow {
    type: string,
    text: string,
    duration: number
}

const Toast = forwardRef<IToastRef>((_, ref) => {
    const toastTopAnimation = useSharedValue(-100);
    const TOP_VALUE = Platform.OS === 'ios' ? 15 : 15;
    const [showing, setShowing] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>('');
    const [toastType, setToastType] = useState<string>('success');

    const show = useCallback(
        ({ type, text, duration }: IShow) => {
            setShowing(true);
            setToastType(type);
            setToastText(text);
            toastTopAnimation.value = withSequence(
                withTiming(TOP_VALUE),
                withDelay(
                    duration,
                    withTiming(-100, undefined, finish => {
                        if (finish) {
                            runOnJS(setShowing)(false);
                        }
                    }),
                ),
            );
        },
        [TOP_VALUE, toastTopAnimation],
    );


    useImperativeHandle(
        ref,
        () => ({
            show,
        }),
        [show]
    );

    const animaterTopStyle = useAnimatedStyle(() => {
        return {
            top: toastTopAnimation.value,
        };
    });

    return (
        <>
            {showing && (
                <Animated.View
                    style={[
                        styles.toastContainer,
                        toastType === 'success'
                            ? styles.successToastContainer
                            : toastType === 'warning'
                                ? styles.warningToastContainer
                                : styles.errorToastContainer,
                        animaterTopStyle,
                    ]}
                >
                    <Image
                        source={
                            toastType === 'success'
                                ? require('./assets/SuccessIcon.png')
                                : toastType === 'warning'
                                    ? require('./assets/WarningIcon.png')
                                    : require('./assets/ErrorIcon.png')
                        }
                        style={styles.toastIcon}
                    />
                    <Text
                        style={[
                            styles.toastText,
                            toastType === 'success'
                                ? styles.successToastText
                                : toastType === 'warning'
                                    ? styles.warningToastText
                                    : styles.errorToastText,
                        ]}
                    >
                        {toastText}
                    </Text>
                </Animated.View>
            )}
        </>
    );
});

export default Toast;
