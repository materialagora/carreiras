import React from "react";

import { SearchPersonInput } from "components/molecules";

import { useHeaderState } from "./state";

export const Header = () => {
  const { isSearchble, handlerSearchPersonInput } = useHeaderState();

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
            <div>new aside</div>
          )}
        </div>
      </div>
    </div>
  );
};
