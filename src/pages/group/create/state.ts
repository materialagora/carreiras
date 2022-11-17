import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IPerson, IGroup } from "interfaces";
import { RootState } from "redux/store";

export const useCreateGroupState = () => {
  const [groupName, setGroupName] = useState<string>("");
  const people = useSelector((state: RootState) => state.people);
  const [groupMembers, setGroupMembers] = useState<IPerson[]>([]);
  const [group, setGroup] = useState<IGroup>();

  useEffect(() => {
    setGroup({
      name: groupName,
      persons: groupMembers,
    });
  }, [groupName, groupMembers]);

  const handlerGroupName = (value: string) => setGroupName(value);

  const handlerGroupMember = (person: IPerson) => {
    const members = groupMembers;
    members.push(person);
    setGroupMembers(members);
  };

  const handlerSaveGroup = () => {
    console.log(JSON.stringify(group));
  };

  return {
    group,
    people,
    groupMembers,
    handlerGroupName,
    handlerGroupMember,
    handlerSaveGroup,
  };
};
