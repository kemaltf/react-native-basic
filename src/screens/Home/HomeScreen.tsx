import React from 'react';
import {ScrollView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Card from '../../components/Card/Card';
import CustomButton from '../../components/Button/CustomButton';
import {globalStyles} from '../../styles/globalStyles';
import {styles} from './styles';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={globalStyles.container}>
      {Array.from({length: 10}, (_, i) => (
        <Card
          key={i}
          title={`Hello World #${i + 1}`}
          imageUrl={`https://picsum.photos/100/100?random=${i}`}
        />
      ))}
      <View style={styles.footer}>
        <CustomButton
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
