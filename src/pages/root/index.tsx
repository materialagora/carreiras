import React from "react";
import { Link } from "react-router-dom";

import { useRootState } from "./state";

export const Root = () => {
  const {
    query: { data },
  } = useRootState();

  console.log("data: ", data);

  return (
    <div>
      <Link to={"hero/3"}>hero 30</Link>
    </div>
  );
};
