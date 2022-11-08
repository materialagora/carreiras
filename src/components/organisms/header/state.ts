import { useDispatch } from "react-redux";

import { IPerson } from "interfaces/person";
import { refresh } from "redux/slices/people";

export const useHeaderState = () => {
  const dispatch = useDispatch();

  const handlerSearchPersonInput = (data?: IPerson[] | undefined) => {
    data && dispatch(refresh(data));
  };

  return {
    handlerSearchPersonInput,
  };
};
