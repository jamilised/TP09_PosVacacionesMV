import type { FC } from 'react';
import { Modal, View, Text, Image, Pressable, ScrollView } from 'react-native';
import { Star, X } from 'lucide-react-native';
import type { Book } from '../../types/book';
import { styles } from './BookDetailModal.styles';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

export const BookDetailModal: FC<BookDetailModalProps> = ({
  book,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!book) return null;

  return (
    <Modal
      visible={!!book}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdropTouchable} onPress={onClose} />
        
        <View style={styles.modalCard}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={2}>
              {book.title}
            </Text>
            <Pressable onPress={onClose} style={styles.closeBtn} hitSlop={8}>
              <X size={22} color="#f3e9d2" />
            </Pressable>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.bodyRow}>
              <Image
                source={{ uri: book.coverUrl }}
                style={styles.coverImage}
                resizeMode="cover"
              />
              <View style={styles.infoCol}>
                <Text style={styles.infoText}>
                  <Text style={styles.boldLabel}>Autor(es): </Text>
                  {book.authors.join(', ')}
                </Text>

                {book.publishYear && (
                  <Text style={styles.infoText}>
                    <Text style={styles.boldLabel}>Año: </Text>
                    {book.publishYear}
                  </Text>
                )}

                {book.numberOfPages && (
                  <Text style={styles.infoText}>
                    <Text style={styles.boldLabel}>Páginas: </Text>
                    {book.numberOfPages}
                  </Text>
                )}

                {book.publishers && book.publishers.length > 0 && (
                  <Text style={styles.infoText}>
                    <Text style={styles.boldLabel}>Editorial: </Text>
                    {book.publishers.join(', ')}
                  </Text>
                )}
              </View>
            </View>

            {book.firstSentence && (
              <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}>"{book.firstSentence}"</Text>
              </View>
            )}

            {book.subjects && book.subjects.length > 0 && (
              <View>
                <Text style={styles.sectionTitle}>Temas:</Text>
                <View style={styles.tagsContainer}>
                  {book.subjects.map((sub, i) => (
                    <View key={i} style={styles.tag}>
                      <Text style={styles.tagText}>{sub}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              onPress={() => onToggleFavorite(book)}
              style={({ pressed }) => [
                styles.favoriteBtn,
                pressed && { opacity: 0.6 },
              ]}
              hitSlop={8}
            >
              <Star
                size={26}
                color={isFavorite ? '#f1c40f' : '#a89887'}
                fill={isFavorite ? '#f1c40f' : 'transparent'}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};