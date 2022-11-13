import { useMemo } from "react";

export type StorageKey = "DELETED_PERSONS";

export const useStorage = () => {
  /**
   * This method ``save item`` to local storage
   * @param key
   * @param value  JSON stringfy
   */
  const add = (key: StorageKey, value: string) => {
    localStorage.setItem(key, value);
  };

  /**
   * This method ``get item`` in local storage
   * @param key
   * @param type
   * @returns value  JSON stringfy
   */
  const get = (key: StorageKey, type: "string" | "JSON" = "JSON") => {
    const value = localStorage.getItem(key) as string;
    return type === "string" ? value : JSON.parse(value);
  };

  /**
   * This method ``remove item`` in local storage
   * @param key
   * @returns value  JSON stringfy
   */
  const remove = (key: StorageKey) => {
    localStorage.removeItem(key);
  };

  /**
   * This method clean ``all items`` in local storage
   */
  const clear = () => {
    localStorage.clear();
  };

  const deletedPersons = useMemo(() => get("DELETED_PERSONS") || [], []);

  return {
    add,
    get,
    remove,
    clear,
    deletedPersons,
  };
};
