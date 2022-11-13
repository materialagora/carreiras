import React from "react";

import { LinkButton } from "components/atoms";

/**
 * Child export
 */

export * from "./create";
export * from "./edit";

export const Group = () => {
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
      <div className="border-solid border-t border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)] pt-[30px]">
        ola mundo
      </div>
    </div>
  );
};
