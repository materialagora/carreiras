import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const { goBack } = browser();

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

    storage.add("GROUP", JSON.stringify(groups ? [...groups, group] : [group]));
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
