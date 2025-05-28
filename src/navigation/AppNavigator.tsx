import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Stack navigator for Home tab
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

// Stack navigator for Profile tab (second tab example)
const ProfileStack = () => {
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

// Component for tab icons
const TabBarIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => {
  return <Ionicons name={name} size={size} color={color} />;
};

// Tab navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main drawer navigator
const AppNavigator: React.FC = () => {
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

export default AppNavigator;
