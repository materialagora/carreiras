import React, { HtmlHTMLAttributes, FC } from "react";

import { IPerson } from "interfaces/person";
import { IoSearch } from "react-icons/io5";

import { useSearchPersonInputState } from "./state";

export const SearchPersonInput: FC<
  Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange"> & {
    onChange: (data?: IPerson[], isPending?: boolean) => void;
  }
> = ({ onChange, ...args }) => {
  const { handlerInput } = useSearchPersonInputState(onChange);
  return (
    <div className="relative flex">
      <span className="absolute right-3 top-3">
        <IoSearch />
      </span>
      <input
        className="bg-[rgba(255,255,255,.5)] rounded-[100px] flex-1 outline-none p-[.5rem_1rem] text-secondary-1"
        {...args}
        onChange={handlerInput}
      />
    </div>
  );
};
