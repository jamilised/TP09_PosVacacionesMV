# Biblioteca Digital 

## Integrantes
* **Morena Yael Zalcman**
* **Eliel Dan Jamilis**

---

## API Utilizada
* **Open Library Search API**: [`https://openlibrary.org/search.json`]

---

## Descripción Breve
Aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript** que permite a los usuarios buscar, explorar y guardar libros favoritos en sus dispositivos móviles. Incluye un modal nativo con vista detallada de cada libro y un diseño adaptado para ofrecer una experiencia fluida, rápida y responsiva en dispositivos iOS y Android.

---

## Organización de Componentes

El proyecto mobile sigue la arquitectura modular recomendada para React Native:

```text
src/
├── components/           # Componentes nativos reutilizables
│   ├── BookDetailModal/  # Modal nativo (<Modal>) para el detalle del libro
│   ├── Favorites/        # Contenedor para mostrar la lista de favoritos
│   ├── ItemCard/         # Componente de tarjeta táctil (<Pressable>)
│   ├── ItemList/         # Renderizado optimizado con <FlatList>
│   └── SearchBar/        # Input nativo para la búsqueda
├── hooks/                # Hooks personalizados
│   ├── useBooks.ts       # Gestión del fetch a la API y estado de carga
│   └── useFavorites.ts   # Lógica para guardar/eliminar favoritos
├── screens/              # Pantallas principales
│   ├── FavoritesScreen/  # Pantalla de libros guardados
│   └── Home/       # Pantalla principal de exploración
├── services/             # Integración con la API
│   └── api.ts            # Cliente HTTP Axios y normalización de la respuesta
├── storage/              # Persistencia asíncrona móvil
│   └── favoriteStorage.ts# Métodos de lectura y escritura con AsyncStorage
└── types/                # Definiciones de tipos TypeScript
    └── book.ts           # Interfaz para el objeto Book