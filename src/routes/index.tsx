import React from 'react'
import { Switch, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Hero } from "../pages/Hero";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/hero/:id" component={Hero} />
    </Switch>
  );
};
