import React, { type FC, useEffect } from 'react';
import {
  type AccessibilityState,
  type GestureResponderEvent,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../theme/colors';

interface TabBarItem {
  iconName: string;
  name: string;
  selectedIconName: string;
  size: number;
}

interface CustomTabBarButtonProps {
  item: TabBarItem;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityState?: AccessibilityState;
}

export const CustomTabBarButton: FC<CustomTabBarButtonProps> = props => {
  const { accessibilityState } = props;
  const focused = accessibilityState?.selected ?? false;
  const scale = useSharedValue(1);
  const translateYValue = useSharedValue(0);
  const backgroundColor = useSharedValue(colors.white);
  const rotationValue = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      scale.value = withSpring(1.5, { damping: 10 });
      translateYValue.value = withSpring(-20, { damping: 10 });
      backgroundColor.value = withSpring(colors.primary);
      rotationValue.value = withSpring(360, { damping: 10 });
    } else {
      scale.value = withSpring(1, { damping: 10 });
      translateYValue.value = withSpring(0, { damping: 10 });
      backgroundColor.value = withSpring(colors.white);
      rotationValue.value = withSpring(0, { damping: 10 });
    }
  }, [focused, backgroundColor, rotationValue, scale, translateYValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateY: translateYValue.value },
        { rotate: `${rotationValue.value}deg` }
      ]
    };
  });

  const animatedBGColor = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value // Move backgroundColor here, it's not part of the transform
    };
  });

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={props.onPress}>
      <Animated.View style={[styles.btn, animatedStyle]}>
        <Animated.View
          style={[styles.warper, { ...StyleSheet.absoluteFillObject }, animatedBGColor]}>
          <Icon
            name={focused ? props.item.selectedIconName : props.item.iconName}
            size={22}
            color={focused ? colors.white : colors.primary}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 50,
    height: 50,
    borderColor: colors.white,
    borderWidth: 4,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  warper: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
