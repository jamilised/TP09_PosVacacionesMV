import type { FC } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import type { Book } from '../../types/book';
import { ItemCard } from '../ItemCard/ItemCard';
import { styles } from './ItemList.styles';

interface ItemListProps {
  books: Book[];
  loading: boolean;
  error: string | null;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (book: Book) => void;
}

export const ItemList: FC<ItemListProps> = ({
  books,
  loading,
  error,
  isFavorite,
  onToggleFavorite,
}) => {
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#c5a059" />
        <Text style={styles.message}>Cargando libros de la biblioteca...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={[styles.message, styles.errorMessage]}>{error}</Text>
      </View>
    );
  }

  if (books.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.message}>No se encontraron resultados.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            book={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={onToggleFavorite}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};