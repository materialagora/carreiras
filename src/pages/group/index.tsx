import React from "react";

import { LinkButton } from "components/atoms";
import { CardGroup } from "components/organisms";

import { useGroupState } from "./state";

/**
 * Child export
 */

export * from "./create";
export * from "./edit";

export const Group = () => {
  const { groups } = useGroupState();

  return (
    <div className="flex flex-col py-[30px]">
      <div className="flex flex-row items-center justify-center py-[30px]">
        <span className="mr-[1rem]">
          <LinkButton to={"create"}>
            <span className="capitalize mr-[.5rem]">create</span>
            <span>group</span>
          </LinkButton>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-xl:grid-cols-8 gap-[20px] border-solid border-t border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)] pt-[30px]">
        {groups.map((item, index) => {
          return <CardGroup id={index + 1} {...item} key={index} />;
        })}
      </div>
    </div>
  );
};
