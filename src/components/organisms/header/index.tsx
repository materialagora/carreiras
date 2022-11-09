import React from "react";

import { SearchPersonInput } from "components/molecules";

import { useHeaderState } from "./state";

export const Header = () => {
  const { handlerSearchPersonInput } = useHeaderState();
  return (
    <div className="sticky top-0 flex justify-center bg-primary-1 z-10">
      <div className="flex flex-row py-[1.5rem] container">
        <div className="text-secondary-1 text-[20px]">
          <strong className="italic font-mono">Super</strong>
          <span className="italic uppercase font-mono">Hero</span>
        </div>
        <div className="flex justify-end flex-1">
          <SearchPersonInput
            placeholder="Pesquisar"
            onChange={handlerSearchPersonInput}
          />
        </div>
      </div>
    </div>
  );
};
