import { useCallback, useEffect, useState } from "react";

import { useStorage } from "hooks";
import { IGroup } from "interfaces";

export const useGroupState = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const storage = useStorage();

  const loadGroups = useCallback(() => {
    const data = storage.get("GROUP", "JSON");
    setGroups(data);
  }, []);

  const handlerUpdateList = (data: IGroup[]) => setGroups(data);

  useEffect(() => {
    loadGroups();
  }, []);

  return {
    groups,
    handlerUpdateList,
  };
};
