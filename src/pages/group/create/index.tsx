import React from "react";

import { Button, Input } from "components/atoms";
import { IoAdd, IoRemove, IoSave } from "react-icons/io5";

import { useCreateGroupState } from "./state";

export const CreateGroup = () => {
  const { group, people, handlerGroupMember, handlerGroupName } =
    useCreateGroupState();

  return (
    <div className="flex flex-col py-[30px]">
      <div className="child:h-[400px]   grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div className="flex flex-col">
          <div className="text-primary-1 p-[.5rem] w-max bg-[rgba(0,0,0,.06)] dark:bg-[rgba(255,255,255,.06)] uppercase">
            Results
          </div>
          <ul className="border border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)] p-[1rem] relative h-full list-none flex-1 overflow-y-scroll">
            {people.data.map((item, index) => {
              return (
                <li
                  onClick={() => handlerGroupMember(item)}
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
                  <Button onClick={() => handlerGroupMember(item)}>
                    <IoAdd />
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-primary-1 p-[.5rem] w-max bg-[rgba(0,0,0,.06)] dark:bg-[rgba(255,255,255,.06)] uppercase">
            Group Members
          </div>
          <ul className="border border-[rgba(0,0,0,.06)] dark:border-[rgba(255,255,255,.06)] p-[1rem] relative h-full list-none flex-1 overflow-y-scroll">
            {group?.persons.map((item, index) => {
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
                  <Button>
                    <IoRemove />
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end  pt-[30px]">
        <div>
          <Input
            onChange={(e) => handlerGroupName(e.currentTarget.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <Button className="flex flex-row items-center ml-[1rem] dark:bg-primary-1 bg-primary-1">
            <span>Finalize</span>
            <span className="ml-[1rem]">
              <IoSave />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
