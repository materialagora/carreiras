import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IPerson } from "interfaces/person";

export const CardPerson: FC<IPerson> = ({ image, name, id, biography }) => {
  return (
    <Link to={`hero/${id}`}>
      <div className="border-solid border border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)]">
        <div className="flex flex-col">
          <div className="relative">
            <img className="h-[250px] w-fit" src={image.url} alt={image.name} />
          </div>
          <div className="flex flex-col h-[70px] p-[1rem]">
            <span className="flex font-extrabold dark:text-primary-1 text-primary-2">
              {name}
            </span>
            {/* <span>{biography.alignment}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
