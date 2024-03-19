import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { type RootState } from '@/store';
import { checkLoaderAction } from '@/store/slices/features/users/slice';

// import { SplashScreen } from '@/screens/SplashScreen';
import AuthStackNav from './AuthStackNavigator';
// import DrawerNavigator from './DrawerNavigator';
// interface RootState {
//   users: {
//     user: {
//       loginStatus: boolean;
//       // other properties...
//     };
//     // other properties...
//   };
//   // other slices...
// }
// correctly
const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoaderAction());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {/* {authStatus ? <DrawerNavigator /> : <AuthStackNav />} */}
      <AuthStackNav />
    </NavigationContainer>
  );
};

export default Navigator;
