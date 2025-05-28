import React from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../styles/globalStyles';

interface CardProps {
  title: string;
  imageUrl: string;
  cardStyle?: ViewStyle;
  titleStyle?: TextStyle;
  imageStyle?: ImageStyle;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  cardStyle,
  titleStyle,
  imageStyle,
}) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[globalStyles.title, titleStyle]}>{title}</Text>
      <Image
        source={{uri: imageUrl}}
        style={[{width: 100, height: 100, marginTop: 10}, imageStyle]}
      />
    </View>
  );
};

export default Card;
