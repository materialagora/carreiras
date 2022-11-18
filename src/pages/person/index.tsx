import React from "react";

import { FormPerson } from "components/organisms";

import { usePersonState } from "./state";

export const Person = () => {
  const { isLoading, person } = usePersonState();

  return !isLoading ? <FormPerson data={person} /> : <div>Loading...</div>;
};
