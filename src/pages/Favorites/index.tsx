import { Container } from './styles'

import { useFavorites } from '../../hooks/useFavorites';

export const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  return (
    <Container />
  )
}

