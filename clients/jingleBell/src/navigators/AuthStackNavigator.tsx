import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen, SignUpScreen } from '@/screens';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'SignUpScreen'}
      screenOptions={{
        headerShown: false
      }}>

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNav;
