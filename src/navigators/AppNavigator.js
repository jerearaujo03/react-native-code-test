import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}>
      {!user ? (
        <AppStack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{animationTypeForReplace: 'pop'}}
        />
      ) : (
        <AppStack.Screen name="MainNavigator" component={MainNavigator} />
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
