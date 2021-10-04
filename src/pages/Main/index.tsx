import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import { api } from "../../utils/api";
import Hero from '../../types/hero'

import { useFavorites } from '../../hooks/useFavorites';

import {
  Container,
  SearchContainer,
  HeroesListContainer,
  HeroItem,
  Button,
} from "./styles";

interface HeroSearchRequest {
  results: Hero[];
}

export const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const history = useHistory();

  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const { data } = await api.get<HeroSearchRequest>(
          `/search/${searchValue}`
        );
        setHeroes(data.results);
      } catch {
        console.log("Error on request");
      }
    };

    getHeroes();
  }, [searchValue, setHeroes]);

  const handleShowHero = (id: string) => history.push(`/hero/${id}`);

  return (
    <Container>
      <h1>Super Hero APP</h1>
      <SearchContainer>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Procure por um herói ou vilão..."
        />
        <button>
          <FaSearch size="24" color="rgba(0, 0, 0, 0.2)" />
        </button>
      </SearchContainer>
      <HeroesListContainer>
        <ul>
          {heroes &&
            heroes.map((hero) => (
              <HeroItem key={hero.id}>
                <Link to={`/hero/${hero.id}`}>
                  <img src={hero.image.url} alt={hero.name} />
                </Link>
                <span>{hero.name}</span>
                <Button onClick={() => handleShowHero(hero.id)}>
                  Visualizar
                </Button>
                <Button color="#449179" onClick={() => addToFavorites(hero)}>
                  {isFavorite(hero.id) ? 'Salvar nos Favoritos' : 'Excluir dos Favoritos' }</Button>
              </HeroItem>
            ))}
        </ul>
      </HeroesListContainer>
    </Container>
  );
};
