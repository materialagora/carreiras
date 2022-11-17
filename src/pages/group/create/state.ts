import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

export const useCreateGroupState = () => {
  const [groupName, setGroupName] = useState<string>("");
  const people = useSelector((state: RootState) => state.people);

  console.log(groupName);

  const handlerGroupName = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setGroupName(e.currentTarget.value);

  return {
    people,
    handlerGroupName,
  };
};
