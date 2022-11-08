import React from "react";
import { Link } from "react-router-dom";

import { useRootState } from "./state";

export const Root = () => {
  const { people } = useRootState();

  console.log("all state: ", people);

  return (
    <div>
      <Link to={"hero/3"}>hero 30</Link>
    </div>
  );
};
