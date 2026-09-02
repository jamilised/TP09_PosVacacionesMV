import { useState, type FC } from 'react';
import { View } from 'react-native';
import type { Book } from '../../types/book';
import { Favorites } from '../../components/Favorites/Favorites';
import { BookDetailModal } from '../../components/BookDetailModal/BookDetailModal';
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
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <View style={styles.container}>
      <Favorites
        favorites={favorites}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        onSelectBook={setSelectedBook}
      />
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        isFavorite={selectedBook ? isFavorite(selectedBook.id) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </View>
  );
};