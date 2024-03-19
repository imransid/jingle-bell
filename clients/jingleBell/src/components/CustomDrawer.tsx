import React, { type FC } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native';
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

import { colors } from '../theme/colors';

const { width } = Dimensions.get('screen');

export const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg'
        }}
        style={styles.bgImage}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/20654786?v=4'
          }}
          style={styles.userImg}
        />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  bgImage: {
    height: 140
  },
  drawerListWrapper: {
    marginTop: 65
  },
  userImg: {
    borderColor: colors.white,
    borderRadius: 110 / 2,
    borderWidth: 4,
    bottom: -110 / 2,
    height: 110,
    left: width / 2 - 110,
    position: 'absolute',
    width: 110
  }
});
