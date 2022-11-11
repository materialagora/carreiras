import React from "react";

import { FormPerson } from "components/organisms";

import { usePersonState } from "./state";

export const Person = () => {
  const { person } = usePersonState();

  return (
    <div>
      <FormPerson data={person} />
    </div>
  );
};
