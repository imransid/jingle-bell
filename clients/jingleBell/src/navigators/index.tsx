import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { type RootState } from '@/store';
import { checkLoaderAction } from '@/store/slices/features/users/slice';
import AuthStackNav from './AuthStackNavigator';

import { GestureHandlerRootView } from 'react-native-gesture-handler'



const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoaderAction());
  }, [dispatch]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* {authStatus ? <DrawerNavigator /> : <AuthStackNav />} */}
        <AuthStackNav />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigator;
