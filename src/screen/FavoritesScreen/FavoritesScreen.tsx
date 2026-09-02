import type { FC } from 'react';
import { View } from 'react-native';
import type { Book } from '../../types/book';
import { Favorites } from '../../components/Favorites/Favorites';
import { styles } from './FavoritesScreen.styles';

interface FavoritesScreenProps {
  favorites: Book[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const FavoritesScreen: FC<FavoritesScreenProps> = ({
  favorites,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <View style={styles.container}>
      <Favorites
        favorites={favorites}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </View>
  );
};