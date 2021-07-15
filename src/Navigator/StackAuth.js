import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screen/Login';

const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode={'none'}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default StackAuth;
