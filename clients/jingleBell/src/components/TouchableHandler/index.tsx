import React, { type PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

import Styles from './style';

type CustomTouchableProps = PropsWithChildren<{
  onPress?: () => void;
}>;

export const CustomTouchable: React.FC<CustomTouchableProps> = ({ children, onPress }) => {
  const isActive = useSharedValue(false);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive.value ? 0.5 : 1, {
        duration: 100
      }),
      transform: [
        {
          scale: withSpring(isActive.value ? 0.9 : 1)
        }
      ]
    };
  });

  const handlePress = () => {
    if (onPress != null) {
      onPress();
    }
  };

  return (
    <GestureHandlerRootView>
      <Animated.View
        style={[rStyle, Styles.FlexButton]}
        onTouchStart={() => {
          isActive.value = true;
        }}
        onTouchEnd={() => {
          isActive.value = false;
          runOnJS(handlePress)();
        }}
      >
        {children}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
