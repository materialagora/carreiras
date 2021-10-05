import React from 'react'
import { Switch, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:id" component={Profile} />
    </Switch>
  );
};
