import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { FormPerson } from "components/organisms";

import { Hero, Root, Villain } from "./pages";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "hero/",
    element: <Hero />,
    children: [
      {
        path: ":heroId",
        element: <FormPerson />,
      },
    ],
  },
  {
    path: "villian/",
    element: <Villain />,
    children: [
      {
        path: ":villianId",
        element: <FormPerson />,
      },
    ],
  },
]);

export default Routers;
