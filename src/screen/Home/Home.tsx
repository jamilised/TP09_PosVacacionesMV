import type { FC } from 'react';
import { View } from 'react-native';
import type { Book } from '../../types/book';
import { useBooks } from '../../hooks/useBooks';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ItemList } from '../../components/ItemList/ItemList';
import { styles } from './Home.styles';

interface HomeScreenProps {
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const HomeScreen: FC<HomeScreenProps> = ({ isFavorite, onToggleFavorite }) => {
  const { books, loading, error, searchTerm, setSearchTerm } = useBooks();

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar por título o autor..."
      />
      <ItemList
        books={books}
        loading={loading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </View>
  );
};