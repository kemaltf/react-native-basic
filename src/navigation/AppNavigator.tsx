import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

// Main tab navigator
const AppNavigator: React.FC = () => {
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

// Component for tab icons
const TabBarIcon = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  color,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => {
  // If you're using react-native-vector-icons, uncomment the code below
  // import Ionicons from 'react-native-vector-icons/Ionicons';
  // return <Ionicons name={name} size={size} color={color} />;

  // Use text as placeholder if not using icons
  return <Ionicons name={name} size={size} color={color} />;
};

export default AppNavigator;
