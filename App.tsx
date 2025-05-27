/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <Text>Hello World</Text>
      <Text style={{fontSize: 20, color: 'blue'}}>This is some blue text.</Text>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: 100, height: 100}}
      />
      {/* Adding more items to make content scrollable */}
      {Array.from({length: 10}, (_, i) => (
        <View key={i} style={{marginVertical: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>Item {i + 1}</Text>
          <Image
            source={{uri: `https://picsum.photos/100/100?random=${i}`}}
            style={{width: 100, height: 100, marginTop: 10}}
          />
        </View>
      ))}
      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert('Button pressed!');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
