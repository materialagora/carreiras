import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { client } from "api/axios";
import { IPerson } from "interfaces/person";

export const usePersonState = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<SuperHeroResponseType<IPerson>>();
  const loadPerson = useCallback(() => {
    void client.get(`${id}`).then(({ data }) => {
      setPerson(data);
    });
  }, []);

  useEffect(() => {
    loadPerson();
  }, []);

  return {
    id,
    person,
  };
};
