import React from "react";

import { CardPerson } from "components/organisms";

import { useRootState } from "./state";

export const Root = () => {
  const { people } = useRootState();

  return (
    <div>
      <div className="border-solid border-b border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)]">
        ola mundo
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-xl:grid-cols-8 gap-[20px] py-[30px]">
        {people.map((item, index) => (
          <CardPerson {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
