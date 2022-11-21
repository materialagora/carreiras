import { useCallback, useEffect, useTransition } from "react";

import { client } from "api/axios";
import { IPerson } from "interfaces/person";

export const useSearchPersonInputState = (
  result?: (data?: IPerson[], isPending?: boolean) => void,
) => {
  const [isPending, startTransiction] = useTransition();
  const finder = useCallback((searchFor: string) => {
    const find = searchFor !== "" && searchFor !== " " ? searchFor : "' '";
    void client.get(`search/${find}`).then(({ data }) => {
      result?.(data.results, isPending);
    });
  }, []);

  useEffect(() => {
    finder("");
  }, []);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransiction(() => {
      finder(e.target.value);
    });
  };

  return {
    handlerInput,
  };
};
