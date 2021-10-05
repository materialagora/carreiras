import React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
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
  AddToGroupContainer,
  AddToGroupButtonsContainer,
  HeaderButtonsContainer,
} from './styles';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleOpenModal = useCallback(
    (hero: Hero) => {
      setSelectedHero(hero);
      setModalIsOpen(true);
    },
    [setSelectedHero, setModalIsOpen]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedHero({} as Hero);
    setModalIsOpen(false);
  }, [setSelectedHero, setModalIsOpen]);

  const handleGetHeroes = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await superHeroAPI.get<HeroSearchRequest>(
        `/search/${searchValue}`
      );
      setHeroes(data.results);
      setLoading(false);
    } catch {
      toast.error('Error while searching for characters!');
    }
  }, [setLoading, searchValue, setHeroes]);

  const handleGetGroups = useCallback(async () => {
    try {
      const { data } = await localAPI.get<Group[]>(`/groups`);
      setGroups(data);
    } catch {
      console.log('Error on request');
    }
  }, [setGroups]);

  useEffect(() => {
    handleGetHeroes();
    handleGetGroups();
  }, [handleGetHeroes, handleGetGroups]);

  const handleShowHero = useCallback(
    (id: string) => history.push(`/profile/${id}`),
    [history]
  );

  const handleNewGroup = useCallback(
    () => history.push('/group-list', { creationReady: true }),
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
    try {
      await addHeroToGroup({ hero: selectedHero, groups: selectedGroups });
      handleCloseModal();

      const { data } = await localAPI.get<Group[]>(`/groups`);
      setGroups(data);

      toast.success(`Character addded to group!`);
      setSelectedGroups([]);
    } catch {
      toast.error('Error while adding character to group!');
    }
  }, [selectedHero, selectedGroups, setGroups, handleCloseModal]);

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
        <button onClick={() => handleGetHeroes()}>
          <FaSearch size={24} />
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
