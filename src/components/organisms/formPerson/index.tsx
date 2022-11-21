import React, { FC } from "react";

import { CardDinamic } from "components/molecules";
import { IPerson } from "interfaces/person";

export const FormPerson: FC<{ data: SuperHeroResponseType<IPerson> }> = ({
  data,
}) => {
  return (
    <div>
      <div className="pt-[60px]">
        <span className="text-primary-1 text-[30px]">{data.name}</span>
        <span className="ml-[10px] text-[30px]">{`#${data.id}`}</span>
      </div>
      <div className="grid gap-[40px] grid-rows-1 sm:grid-cols-2 md:grid-cols-3 py-[30px] child:max-h-[600px]">
        <div>
          {data.image && (
            <img
              className="border border-primary-2 p-[10px] h-[500px]"
              src={data.image.url}
              alt={data.image.name}
            />
          )}
        </div>
        <CardDinamic title="biography" data={data.biography} />
        <CardDinamic title="appearance" data={data.appearance} />
        <CardDinamic title="powerstats" data={data.powerstats} />
        <CardDinamic title="connections" data={data.connections} />
      </div>
    </div>
  );
};
