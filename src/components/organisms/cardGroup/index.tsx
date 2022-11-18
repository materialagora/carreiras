import React, { FC } from "react";

import { LinkButton } from "components/atoms";
import { IGroup } from "interfaces/group";

export const CardGroup: FC<IGroup & { id: number }> = ({
  id,
  name,
  persons,
}) => {
  return (
    <LinkButton className="rounded-none" to={`edit/${id}`}>
      <div className="flex flex-col">
        <div>
          <strong>{name}</strong>
        </div>
        <div className="flex flex-row text-white">
          <span className="font-bold mr-[1rem]">Total members:</span>
          <span>{persons.length}</span>
        </div>
      </div>
    </LinkButton>
  );
};
