import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useStorage } from "hooks";
import { IPerson, IGroup } from "interfaces";
import { RootState } from "redux/store";
import array from "utils/array";
import { browser } from "utils/browser";

export const useCreateGroupState = () => {
  const [groupName, setGroupName] = useState<string>("");
  const people = useSelector((state: RootState) => state.people);
  const [groupMembers, setGroupMembers] = useState<IPerson[]>([]);
  const [group, setGroup] = useState<IGroup>();
  const storage = useStorage();
  const [excludedIDs, setExcludedIDs] = useState<number[]>([]);
  const { id } = useParams();
  const { goBack } = browser();

  const loadGroups = useCallback(() => {
    const data: IGroup[] = storage.get("GROUP", "JSON");

    const selected = data[parseInt(id as string) - 1];

    setGroupName(selected.name);
    setGroupMembers(selected.persons);

    setExcludedIDs(selected.persons.map((item) => item.id));
  }, []);

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    setGroup({
      name: groupName,
      persons: groupMembers,
    });
  }, [groupName, groupMembers]);

  const handlerGroupName = (value: string) => setGroupName(value);

  const handlerGroupMember = (person: IPerson) => {
    setGroupMembers([...groupMembers, person]);
    setExcludedIDs([...excludedIDs, person.id]);
  };

  const handlerRemoveMember = (id: number) => {
    const updatedMembers = array().excluded(groupMembers, [id]);
    setGroupMembers(updatedMembers);

    const updatedIds = excludedIDs.filter((item) => item !== id);
    setExcludedIDs(updatedIds);
  };

  const handlerSaveGroup = () => {
    const groups = storage.get("GROUP", "JSON");

    groups[parseInt(id as string) - 1] = group;

    storage.add("GROUP", JSON.stringify([...groups]));
    goBack();
  };

  return {
    group,
    people,
    excludedIDs,
    groupMembers,
    handlerGroupName,
    handlerGroupMember,
    handlerSaveGroup,
    handlerRemoveMember,
  };
};
