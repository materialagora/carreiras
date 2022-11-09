import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

export const useRootState = () => {
  const people = useSelector((state: RootState) => state.people);

  const hero = useMemo(() => {
    const list = people.data.filter(
      (item) => item.biography.alignment === "good",
    );
    return list;
  }, [people]);

  const villain = useMemo(() => {
    const list = people.data.filter(
      (item) => item.biography.alignment === "bad",
    );
    return list;
  }, [people]);

  return {
    people: people.data,
    hero,
    villain,
  };
};
