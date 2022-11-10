import React from "react";

import { usePersonState } from "./state";

export const Person = () => {
  const { person } = usePersonState();

  console.log("id:", person);

  return <div>Person</div>;
};
