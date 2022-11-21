import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

import { useStorage } from "hooks";
import { addMatch } from "redux/slices";
import { RootState } from "redux/store";
import array from "utils/array";

import { TabShowType } from "./types";

export const useRootState = () => {
  const storage = useStorage();
  const people = useSelector((state: RootState) => state.people);
  const [filter, setFilter] = useState<TabShowType>("All");
  const match = useMatch("/");
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (match) dispatch(addMatch(match));
  }, [match]);

  const buildPeopleData = () => {
    const deletedIDs: number[] = storage.deletedPersons;
    const data =
      filter === "All" ? people.data : filter === "Hero" ? hero : villain;

    return array().excluded(data, deletedIDs);
  };

  return {
    tabShow,
    people: people.data,
    hero,
    villain,
    filter,
    handlerFilter,
    getStyles,
    buildPeopleData,
  };
};
