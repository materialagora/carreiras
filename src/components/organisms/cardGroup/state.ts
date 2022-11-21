import { useStorage } from "hooks/useStorage";
import { IGroup } from "interfaces/group";

export const useCardGroupState = () => {
  const { add, get } = useStorage();

  const handelerDeleteGroup = (id: number) => {
    const groups: IGroup[] = get("GROUP", "JSON");
    const updatedList = groups.filter((_, index) => index + 1 !== id);
    add("GROUP", JSON.stringify(updatedList));
    return updatedList;
  };

  return {
    handelerDeleteGroup,
  };
};
