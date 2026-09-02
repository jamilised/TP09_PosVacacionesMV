import type { FC } from 'react';
import { View, Text } from 'react-native';
import type { Book } from '../../types/book';
import { ItemList } from '../ItemList/ItemList';
import { styles } from './Favorites.styles';

interface FavoritesProps {
  favorites: Book[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const Favorites: FC<FavoritesProps> = ({
  favorites,
  isFavorite,
  onToggleFavorite,
}) => {
  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Aún no guardaste ningún libro en favoritos.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ItemList
        books={favorites}
        loading={false}
        error={null}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </View>
  );
};