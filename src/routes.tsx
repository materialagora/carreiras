import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { CreateGroup, EditGroup, Group, Person, Root } from "./pages";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: ":id",
    element: <Person />,
  },
  {
    path: "group",
    element: <Group />,
  },
  {
    path: "group/create",
    element: <CreateGroup />,
  },
  {
    path: "group/edit/:id",
    element: <EditGroup />,
  },
]);

export default Routers;
