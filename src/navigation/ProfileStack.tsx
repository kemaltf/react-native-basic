import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../screens/Details/DetailsScreen';

// Create navigators
const Stack = createNativeStackNavigator();

// Stack navigator for Profile tab (second tab example)
export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={DetailsScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};
