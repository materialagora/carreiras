import React from "react";

import { LinkButton } from "components/atoms";
import { CardPerson } from "components/organisms";

import { useRootState } from "./state";

export const Root = () => {
  const { tabShow, handlerFilter, getStyles, buildPeopleData } = useRootState();

  return (
    <div className="py-[30px]">
      <div className="flex flex-row items-center justify-center py-[30px]">
        <span>
          <LinkButton to={"/group"}>
            <span className="italic mr-[.5rem]">
              <strong className="capitalize">super</strong>Hero
            </span>
            <span className="capitalize">group</span>
          </LinkButton>
        </span>
      </div>
      <div className="mb-[30px] overflow-hidden border-solid border-b border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)]">
        {tabShow.map((item, index) => {
          return (
            <span
              className={getStyles(item)}
              key={index}
              onClick={() => handlerFilter(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-xl:grid-cols-8 gap-[20px]">
        {buildPeopleData().map((item, index) => (
          <CardPerson {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
