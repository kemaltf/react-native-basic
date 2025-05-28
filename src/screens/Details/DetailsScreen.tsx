import React from 'react';
import {View, Alert} from 'react-native';
import {Text} from 'react-native';
import CustomButton from '../../components/Button/CustomButton';
import {globalStyles} from '../../styles/globalStyles';
import {styles} from './styles';

const DetailsScreen: React.FC = () => {
  return (
    <View style={[globalStyles.container, styles.centered]}>
      <Text style={globalStyles.title}>This is the Details screen</Text>
      <CustomButton
        title="Alert!"
        onPress={() => Alert.alert('Hello from Details')}
      />
    </View>
  );
};

export default DetailsScreen;
