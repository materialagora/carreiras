import { ReactNode, createContext, useState, useEffect, useContext } from 'react'

import Hero from '../types/hero'

interface FavoritesProviderProps {
  children: ReactNode
}

interface FavoritesContextData {
  favorites: Hero[];
  addToFavorites: (hero: Hero) => void,
  removeFromFavorites: (id: string) => void,
  isFavorite: (id: string) => boolean
}

export const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Hero[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('@superheromarket/favorites') ?? '[]')
    setFavorites(storedFavorites);
  }, [setFavorites]);

  function addToFavorites(hero: Hero) {
    setFavorites([...favorites, hero])
    localStorage.setItem("@superheromarket/favorites", JSON.stringify(favorites));
  }

  function removeFromFavorites(id: string) {
    const selectedFavoriteIndex = favorites.findIndex(hero => hero.id === id);
    const favoritesCopy = favorites.slice();
    favoritesCopy.splice(selectedFavoriteIndex)
    setFavorites(favoritesCopy);
    localStorage.setItem("@superheromarket/favorites", JSON.stringify(favoritesCopy));
  }

  function isFavorite(id: string) {
    const findFavorite = favorites.find(hero => hero.id === id);
    return !!findFavorite;
  }

  return (
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}