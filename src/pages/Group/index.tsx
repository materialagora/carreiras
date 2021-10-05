import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { localAPI } from '../../utils/localAPI';
import IGroup from '../../types/group';

import {
  Container,
  HeaderButtonsContainer,
  HeroesListContainer,
  HeroItem,
} from './styles';
import { toast } from 'react-toastify';

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
        toast.error('Error while getting groups data!');
      }
    };
    getGroup();
  }, [id, setGroup]);

  const handleRemoveFromGroup = async (id: string) => {
    const members = group.members.filter(
      (hero) => String(hero.id) !== String(id)
    );

    const updatedGroup = { ...group, members };

    try {
      const { data } = await localAPI.put<IGroup>(
        `/groups/${group.id}`,
        updatedGroup
      );
      setGroup(data);
      toast.success('Character removed!');
    } catch {
      toast.error('Error while updating group data!');
    }
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
