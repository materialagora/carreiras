import React from "react";

import { useCreateGroupState } from "./state";

export const CreateGroup = () => {
  const { people } = useCreateGroupState();

  console.log(people);

  return (
    <div className="flex flex-col py-[30px]">
      <div className="child:h-[400px]  grid grid-cols-2 gap-[10px]">
        <div className="flex flex-col">
          <div>1</div>
          <ul className="list-none flex-1 overflow-y-scroll">
            {people.data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-[15px] flex flex-row items-center"
                >
                  <div>
                    <img
                      className="rounded-full h-[50px] w-[50px]"
                      src={item.image.url}
                      alt={item.image.name}
                    />
                  </div>
                  <div className="flex-1 mx-[15px]">{item.name}</div>
                  <button onClick={(e) => {}}>button</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>ola mundo</div>
      </div>
      <div className="flex items-center justify-end  pt-[30px]">2</div>
    </div>
  );
};
