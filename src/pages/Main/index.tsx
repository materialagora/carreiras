import React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Modal } from '../../components/Modal';
import { superHeroAPI } from '../../utils/superHeroAPI';
import { localAPI } from '../../utils/localAPI';
import { addHeroToGroup } from '../../utils/addHeroToGroup';

import Hero from '../../types/hero';
import Group from '../../types/group';

import {
  Container,
  SearchContainer,
  HeroesListContainer,
  HeroItem,
  Button,
  AddToGroupContainer,
  AddToGroupButtonsContainer,
  HeaderButtonsContainer,
} from './styles';

interface HeroSearchRequest {
  results: Hero[];
}

const animatedComponents = makeAnimated();

export const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const [selectedHero, setSelectedHero] = useState<Hero>({} as Hero);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);

  const history = useHistory();

  function handleOpenModal(hero: Hero) {
    setSelectedHero(hero);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setSelectedHero({} as Hero);
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

  const handleShowHero = useCallback(
    (id: string) => history.push(`/profile/${id}`),
    [history]
  );

  const handleNewGroup = useCallback(
    () => history.push(`/group-list`, { creationReady: true }),
    [history]
  );

  const handleSelectGroups = useCallback(
    async (values) => {
      const selected = values.map((value: any) => value.value);
      setSelectedGroups(selected);
    },
    [setSelectedGroups]
  );

  const handleSaveGroupSelection = useCallback(async () => {
    await addHeroToGroup({ hero: selectedHero, groups: selectedGroups });

    setSearchValue('');
    handleCloseModal();

    const { data } = await localAPI.get<Group[]>(`/groups`);
    setGroups(data);
  }, [
    selectedHero,
    selectedGroups,
    setGroups,
    setSearchValue,
    handleCloseModal,
  ]);

  const options = useMemo(() => {
    const groupOptions = groups.map((group) => ({
      value: group,
      label: group.name,
    }));

    return groupOptions;
  }, [groups]);

  return (
    <Container>
      <HeaderButtonsContainer>
        <Button onClick={() => history.push('/group-list')}>Groups</Button>
      </HeaderButtonsContainer>
      <h1>Super Hero Market</h1>
      <SearchContainer>
        <input
          value={searchValue}
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
                <Button onClick={() => handleShowHero(hero.id)}>Profile</Button>
                <Button color="#ffcc01" onClick={() => handleOpenModal(hero)}>
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
            onChange={handleSelectGroups}
          />
          <AddToGroupButtonsContainer>
            <Button color="#ffcc01" onClick={handleNewGroup}>
              Create new Group
            </Button>
            <Button onClick={() => handleSaveGroupSelection()}>Save</Button>
          </AddToGroupButtonsContainer>
        </AddToGroupContainer>
      </Modal>
    </Container>
  );
};
