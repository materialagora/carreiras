import { useDispatch, useSelector } from "react-redux";

import { IPerson } from "interfaces/person";
import { refresh } from "redux/slices";
import { RootState } from "redux/store";

export const useHeaderState = () => {
  const dispatch = useDispatch();
  const { match } = useSelector((state: RootState) => state.route);

  const handlerSearchPersonInput = (data?: IPerson[] | undefined) => {
    data && dispatch(refresh(data));
  };

  const isSearchble = () => {
    return match?.pattern?.path !== ":id";
  };

  return {
    isSearchble,
    match,
    handlerSearchPersonInput,
  };
};
