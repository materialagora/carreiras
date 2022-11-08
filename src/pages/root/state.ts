import { useSelector } from "react-redux";

import { RootState } from "redux/store";

export const useRootState = () => {
  const people = useSelector((state: RootState) => state.people);

  return {
    people,
  };
};
