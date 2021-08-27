import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{title: 'Sign In'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
