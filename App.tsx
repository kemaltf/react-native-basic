import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import 'react-native/Libraries/NewAppScreen';

function HomeScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <ScrollView style={styles.container}>
      {Array.from({length: 10}, (_, i) => (
        <View style={styles.card} key={i}>
          <Text style={styles.title}>Hello World #{i + 1}</Text>
          <Image
            source={{uri: `https://picsum.photos/100/100?random=${i}`}}
            style={{width: 100, height: 100, marginTop: 10}}
          />
        </View>
      ))}
      <View style={{paddingBottom: 50}}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ScrollView>
  );
}

function DetailsScreen() {
  return (
    <View
      style={[
        styles.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Text style={styles.title}>This is the Details screen</Text>
      <Button
        title="Alert!"
        onPress={() => Alert.alert('Hello from Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    // Bayangan untuk iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    // Bayangan untuk Android
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});
