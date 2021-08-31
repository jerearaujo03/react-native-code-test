import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddPersonScreen from '../screens/AddPersonScreen';
import EditPersonScreen from '../screens/EditPersonScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
        }}
      />
      <MainStack.Screen
        name="AddPersonScreen"
        component={AddPersonScreen}
        options={{
          title: 'Add Person',
        }}
      />
      <MainStack.Screen
        name="EditPersonScreen"
        component={EditPersonScreen}
        options={{
          title: 'Edit Person',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
