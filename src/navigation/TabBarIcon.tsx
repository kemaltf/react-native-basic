import Ionicons from 'react-native-vector-icons/Ionicons';

export const TabBarIcon = ({
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
