import { useState, useEffect } from 'react';
import type { Book } from '../types/book';
import { getStoredFavorites, saveStoredFavorites } from '../storage/favoriteStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    getStoredFavorites().then((stored) => setFavorites(stored));
  }, []);

  const addFavorite = async (book: Book) => {
    if (!isFavorite(book.id)) {
      const updated = [...favorites, book];
      setFavorites(updated);
      await saveStoredFavorites(updated);
    }
  };

  const removeFavorite = async (id: string) => {
    const updated = favorites.filter((b) => b.id !== id);
    setFavorites(updated);
    await saveStoredFavorites(updated);
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some((b) => b.id === id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};