import React, { FC } from "react";

import { LinkButton } from "components/atoms";
import { IGroup } from "interfaces";
import { IoTrash } from "react-icons/io5";

import { useCardGroupState } from "./state";

export const CardGroup: FC<
  IGroup & { id: number; onDelete?: (data: IGroup[]) => void }
> = ({ id, name, persons, onDelete }) => {
  const { handelerDeleteGroup } = useCardGroupState();
  return (
    <LinkButton className="rounded-none" to={`edit/${id}`}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <strong>{name}</strong>
          </div>
          <div>
            <span
              className="text-[orangered]"
              onClick={(e) => {
                const groups = handelerDeleteGroup(id);
                onDelete?.(groups);
                e.preventDefault();
              }}
            >
              <IoTrash />
            </span>
          </div>
        </div>
        <div className="flex flex-row text-black dark:text-white">
          <span className="font-bold mr-[1rem]">Total members:</span>
          <span>{persons.length}</span>
        </div>
      </div>
    </LinkButton>
  );
};
