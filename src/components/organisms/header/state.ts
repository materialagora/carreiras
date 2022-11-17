import { useDispatch, useSelector } from "react-redux";

import { useStorage } from "hooks";
import { IPerson } from "interfaces/person";
import { refresh } from "redux/slices";
import { RootState } from "redux/store";

export const useHeaderState = () => {
  const dispatch = useDispatch();
  const storage = useStorage();
  const { match } = useSelector((state: RootState) => state.route);

  const handlerSearchPersonInput = (data?: IPerson[] | undefined) => {
    data && dispatch(refresh(data));
  };

  const isSearchble = () => {
    return match?.pattern?.path !== ":id";
  };

  const handlerDelete = () => {
    const id = `${match?.params.id}`;
    const deletedPersons: string[] = storage.deletedPersons;
    deletedPersons.push(id);
    storage.add("DELETED_PERSONS", JSON.stringify(deletedPersons));
    window.history.back();
  };

  return {
    isSearchble,
    match,
    handlerSearchPersonInput,
    handlerDelete,
  };
};