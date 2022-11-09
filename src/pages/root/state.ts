import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";

import { TabShowType } from "./types";

export const useRootState = () => {
  const people = useSelector((state: RootState) => state.people);
  const [filter, setFilter] = useState<TabShowType>("All");

  const tabShow: TabShowType[] = ["All", "Hero", "Villain"];

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

  const handlerFilter = (value: TabShowType) => setFilter(value);

  const getStyles = (value: TabShowType) => {
    const styled =
      filter === value
        ? "text-primary-1 bg-[rgba(0,0,0,.06)] dark:bg-[rgba(255,255,255,.06)]"
        : "";

    return "font-bold cursor-pointer uppercase p-[.5rem_1rem] " + styled;
  };

  return {
    tabShow,
    people: people.data,
    hero,
    villain,
    filter,
    handlerFilter,
    getStyles,
  };
};
