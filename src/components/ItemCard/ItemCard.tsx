import type { FC } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Star } from 'lucide-react-native';
import type { Book } from '../../types/book';
import { styles } from './ItemCard.styles';

interface ItemCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

export const ItemCard: FC<ItemCardProps> = ({
  book,
  isFavorite,
  onToggleFavorite,
}) => {
  const { title, coverUrl, authors, publishYear } = book;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: coverUrl }}
        style={styles.coverImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Pressable
            onPress={() => onToggleFavorite(book)}
            hitSlop={8}
            style={({ pressed }) => [
              styles.favoriteBtn,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Star
              size={24}
              color={isFavorite ? '#f1c40f' : '#a89887'}
              fill={isFavorite ? '#f1c40f' : 'transparent'}
            />
          </Pressable>
        </View>

        <Text style={styles.author} numberOfLines={1}>
          Autor: {authors.join(', ')}
        </Text>

        {publishYear && (
          <Text style={styles.year}>Año: {publishYear}</Text>
        )}
      </View>
    </View>
  );
};