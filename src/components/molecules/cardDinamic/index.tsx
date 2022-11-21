import React, { FC } from "react";

import { useCardDinamicState } from "./state";

export const CardDinamic: FC<{ title: string; data: object }> = ({
  title,
  data,
}) => {
  const { obj, getValue } = useCardDinamicState(data);
  return (
    <div className="flex flex-col">
      <div className="border-b border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)]">
        <div
          data-testid="title"
          className="text-primary-1 p-[.5rem] w-max bg-[rgba(0,0,0,.06)] dark:bg-[rgba(255,255,255,.06)] uppercase"
        >
          {title}
        </div>
      </div>
      <div className="mt-[30px]">
        {Object.keys(obj).map((item, index) => {
          return (
            <div className="grid grid-cols-2 py-[5px]" key={index}>
              <div className="font-bold capitalize text-primary-2">{item}</div>
              <div className="text-end">{getValue(item)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
