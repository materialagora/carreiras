import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Modal } from '../../components/Modal';
import { superHeroAPI } from '../../utils/superHeroAPI';
import { localAPI } from '../../utils/localAPI';
import Hero from '../../types/hero';

import {
  Container,
  SearchContainer,
  HeroesListContainer,
  HeroItem,
  Button,
  AddToGroupContainer,
  AddToGroupButtonsContainer,
} from './styles';

interface HeroSearchRequest {
  results: Hero[];
}

interface Group {
  id: string;
  name: string;
  members: Hero[];
}

const animatedComponents = makeAnimated();

export const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState('');

  const history = useHistory();

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const { data } = await superHeroAPI.get<HeroSearchRequest>(
          `/search/${searchValue}`
        );
        setHeroes(data.results);
      } catch {
        console.log('Error on request');
      }
    };

    const getGroups = async () => {
      try {
        const { data } = await localAPI.get<Group[]>(`/groups`);
        setGroups(data);
      } catch {
        console.log('Error on request');
      }
    };

    getHeroes();
    getGroups();
  }, [searchValue, setHeroes, setGroups]);

  const handleShowHero = (id: string) => history.push(`/profile/${id}`);

  const options = useMemo(() => {
    const groupOptions = groups.map((group) => ({
      value: group.id,
      label: group.name,
    }));
    return groupOptions;
  }, [groups]);

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
                <Button color="#449179" onClick={handleOpenModal}>
                  Add to a group
                </Button>
              </HeroItem>
            ))}
        </ul>
      </HeroesListContainer>
      <Modal isOpen={modalIsOpen} handleCloseModal={handleCloseModal}>
        <AddToGroupContainer>
          <h3>Select groups to add character</h3>
          <Select
            options={options}
            components={animatedComponents}
            isMulti
            maxMenuHeight={115}
          />
          <AddToGroupButtonsContainer>
            <Button color="#449179">Create new Group</Button>
            <Button>Save</Button>
          </AddToGroupButtonsContainer>
        </AddToGroupContainer>
      </Modal>
    </Container>
  );
};
