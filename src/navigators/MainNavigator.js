import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerLeft: () => null,
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
