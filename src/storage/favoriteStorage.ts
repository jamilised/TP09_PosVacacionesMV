import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Book } from '../types/book';

const FAVORITES_KEY = '@favorite_books_key';

export const getStoredFavorites = async (): Promise<Book[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error al leer favoritos:', error);
    return [];
  }
};

export const saveStoredFavorites = async (favorites: Book[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (error) {
    console.error('Error al guardar favoritos:', error);
  }
};