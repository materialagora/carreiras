import React from "react";

import { SearchPersonInput } from "components/molecules";
import { IoTrash } from "react-icons/io5";

import { useHeaderState } from "./state";

export const Header = () => {
  const { isSearchble, handlerSearchPersonInput, handlerDelete } =
    useHeaderState();

  return (
    <div className="sticky top-0 flex justify-center bg-primary-1 z-10">
      <div className="flex flex-row items-center container max-h-[80px] h-[80px]">
        <div className="text-secondary-1 text-[20px]">
          <strong className="italic font-mono">Super</strong>
          <span className="italic uppercase font-mono">Hero</span>
        </div>
        <div className="flex justify-end flex-1">
          {isSearchble() ? (
            <SearchPersonInput
              placeholder="Pesquisar"
              onChange={handlerSearchPersonInput}
            />
          ) : (
            <div
              onClick={handlerDelete}
              className="flex cursor-pointer p-[.5rem_1rem] flex-row items-center rounded-[100px] bg-[orangered]"
            >
              <span className="mr-[.5rem]">
                <IoTrash />
              </span>
              <span>Remove</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
