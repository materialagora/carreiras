import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import { Modal } from '../../components/Modal';
import { localAPI } from '../../utils/localAPI';
import Group from '../../types/group';

import {
  Container,
  HeaderButtonsContainer,
  GroupsContainer,
  CreateGroupFormContainer,
  Button,
} from './styles';

interface LocationStateProps {
  creationReady?: boolean;
}

export const GroupList: React.FC = () => {
  const location = useLocation<LocationStateProps>();

  const [groups, setGroups] = useState<Group[]>([]);
  const [newGroup, setNewGroup] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(
    !!location?.state?.creationReady
  );
  const history = useHistory();

  const getGroups = async () => {
    try {
      const { data } = await localAPI.get<Group[]>(`/groups`);
      setGroups(data);
    } catch {
      console.log('Error on request');
    }
  };

  useEffect(() => {
    getGroups();
  }, [setGroups]);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  async function handleSaveGroup() {
    if (!newGroup) return;

    await localAPI.post('/groups', {
      name: newGroup.trim(),
      members: [],
    });

    getGroups();
    setNewGroup('');
    handleCloseModal();
  }

  async function handleDeleteGroup(id: string) {
    await localAPI.delete(`/groups/${id}`);

    const filteredGroups = groups.filter(
      (group) => Number(group.id) !== Number(id)
    );
    setGroups(filteredGroups);
  }

  return (
    <Container>
      <HeaderButtonsContainer>
        <Button onClick={() => history.push('/')}>Home</Button>
        <Button onClick={handleOpenModal}>Create group</Button>
      </HeaderButtonsContainer>
      <h1>Super Hero Groups</h1>
      <GroupsContainer>
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <Link to={`/groups/${group.id}`}>{group.name}</Link>
              <button onClick={() => handleDeleteGroup(group.id)}>
                <FaTrash color="#8f0000" size={20} />
              </button>
            </li>
          ))}
        </ul>
      </GroupsContainer>
      <Modal isOpen={modalIsOpen} handleCloseModal={handleCloseModal}>
        <CreateGroupFormContainer>
          <h3>Set the new group name</h3>
          <input
            value={newGroup}
            placeholder="Insert the name...."
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <Button onClick={() => handleSaveGroup()}>Save</Button>
        </CreateGroupFormContainer>
      </Modal>
    </Container>
  );
};
