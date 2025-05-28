/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator} from './TabNavigator';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#0066cc',
        drawerInactiveTintColor: 'gray',
      }}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: 'Main Menu',
          drawerIcon: ({color, size}) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={DetailsScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
