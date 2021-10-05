import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { superHeroAPI } from "../../utils/superHeroAPI";
import Hero from '../../types/hero'

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

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const { data } = await superHeroAPI.get<HeroSearchRequest>(
          `/search/${searchValue}`
        );
        setHeroes(data.results);
      } catch {
        console.log("Error on request");
      }
    };

    getHeroes();
  }, [searchValue, setHeroes]);

  const handleShowHero = (id: string) => history.push(`/profile/${id}`);

  return (
    <Container>
      <h1>Super Hero Market</h1>
      <SearchContainer>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a character name..."
        />
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
                <Button color="#449179">Add to a group</Button>
              </HeroItem>
            ))}
        </ul>
      </HeroesListContainer>
    </Container>
  );
};
