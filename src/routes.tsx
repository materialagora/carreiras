import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Hero, HeroGroup, Root } from "./pages";

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
        element: <Hero />,
      },
      {
        path: "group",
        element: <HeroGroup />,
      },
    ],
  },
]);

export default Routers;
