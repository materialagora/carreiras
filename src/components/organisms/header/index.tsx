import React from "react";

import { SearchPersonInput } from "components/molecules";
import { IPerson } from "interfaces/person";

export const Header = () => {
  return (
    <div className="flex justify-center bg-primary-1">
      <div className="flex flex-row py-[1.5rem] container">
        <div className="text-secondary-1 text-[20px]">
          <strong className="italic font-mono">Super</strong>
          <span className="italic uppercase font-mono">Hero</span>
        </div>
        <div className="flex justify-end flex-1">
          <SearchPersonInput
            placeholder="Pesquisar"
            onChange={function (data?: IPerson[] | undefined): void {
              console.log("data: ", data);
            }}
          />
        </div>
      </div>
    </div>
  );
};
