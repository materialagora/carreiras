/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useMatch } from "react-router-dom";

import { client } from "api/axios";
import { IPerson } from "interfaces/person";
import { addMatch } from "redux/slices";

export const usePersonState = () => {
  const { id } = useParams();
  const match = useMatch(":id");
  const dispatch = useDispatch();
  const [person, setPerson] = useState<SuperHeroResponseType<IPerson>>(
    {} as SuperHeroResponseType<IPerson>,
  );
  const loadPerson = useCallback(() => {
    void client.get(`${id}`).then(({ data }) => {
      setPerson(data);
    });
  }, []);

  useEffect(() => {
    if (match) dispatch(addMatch(match));
  }, [match]);

  useEffect(() => {
    loadPerson();
  }, []);

  return {
    id,
    person,
  };
};
