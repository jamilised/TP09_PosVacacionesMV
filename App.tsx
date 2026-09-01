import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookOpen, Star } from 'lucide-react-native';
import { useFavorites } from './src/hooks/useFavorites';
import { HomeScreen } from './src/screen/Home/Home';
import { FavoritesScreen } from './src/screen/FavoritesScreen/FavoritesScreen';
import type { Book } from './src/types/book';

const Tab = createBottomTabNavigator();

export default function App() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = (book: Book) => {
    if (isFavorite(book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2a1b17' },
          headerTintColor: '#f3e9d2',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#2a1b17', borderTopColor: '#c5a059' },
          tabBarActiveTintColor: '#f1c40f',
          tabBarInactiveTintColor: '#a89887',
        }}
      >
        <Tab.Screen
          name="Inicio"
          options={{
            title: 'Biblioteca',
            tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
          }}
        >
          {() => (
            <HomeScreen
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Favoritos"
          options={{
            title: 'Mis Favoritos',
            tabBarIcon: ({ color, size }) => <Star color={color} size={size} />,
          }}
        >
          {() => (
            <FavoritesScreen
              favorites={favorites}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}