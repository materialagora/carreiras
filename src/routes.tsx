import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Person, Root } from "./pages";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: ":id",
    element: <Person />,
  },
]);

export default Routers;
