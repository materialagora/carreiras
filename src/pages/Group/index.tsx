import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { localAPI } from '../../utils/localAPI';
import IGroup from '../../types/group';

import {
  Container,
  HeaderButtonsContainer,
  Button,
  HeroesListContainer,
  HeroItem,
} from './styles';

interface GroupRouteParams {
  id: string;
}

const Group: React.FC = () => {
  const [group, setGroup] = useState<IGroup>({} as IGroup);

  const { id } = useParams<GroupRouteParams>();
  const history = useHistory();

  useEffect(() => {
    const getGroup = async () => {
      try {
        const { data } = await localAPI.get<IGroup>(`/groups/${id}`);
        setGroup(data);
      } catch {
        console.log('Error on request');
      }
    };
    getGroup();
  }, [id, setGroup]);

  const handleRemoveFromGroup = async (id: string) => {
    const heroIndex = group.members?.findIndex(
      (hero) => String(hero.id) === String(id)
    );

    const membersCopy = group.members.slice();
    membersCopy.splice(heroIndex);

    const updatedGroup = { ...group, membersCopy };
    setGroup(updatedGroup);

    await localAPI.put<IGroup>(`/groups/${group.id}`, updatedGroup);
  };

  return (
    <Container>
      <HeaderButtonsContainer>
        <Button onClick={() => history.push('/')}>Home</Button>
        <Button onClick={() => history.push('/group-list')}>Groups</Button>
      </HeaderButtonsContainer>
      <h1>Super Heroes - {group.name}</h1>
      <HeroesListContainer>
        <ul>
          {group.members &&
            group.members.map((hero) => (
              <HeroItem key={hero.id}>
                <Link to={`/hero/${hero.id}`}>
                  <img src={hero.image.url} alt={hero.name} />
                </Link>
                <span>{hero.name}</span>
                <Button onClick={() => history.push(`/profile/${hero.id}`)}>
                  Profile
                </Button>
                <Button
                  color="#8f0000"
                  onClick={() => handleRemoveFromGroup(hero.id)}
                >
                  Remove
                </Button>
              </HeroItem>
            ))}
        </ul>
      </HeroesListContainer>
    </Container>
  );
};

export { Group };
