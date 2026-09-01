import type { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Header.styles';

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = 'Biblioteca Virtual' }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};