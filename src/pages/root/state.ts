import { useQuery } from "@tanstack/react-query";

import { IPerson } from "@interfaces/person";

import { client } from "../../api/axios";

export const useRootState = () => {
  const fetchPeople = async (): Promise<
    Array<SuperHeroResponseType<IPerson>>
  > => await client.get("search/' '").then((response) => response.data);

  const query = useQuery({ queryFn: fetchPeople });

  return {
    query,
  };
};
