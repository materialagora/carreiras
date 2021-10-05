import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { GroupList } from '../pages/GroupList';
import { Group } from '../pages/Group';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/group-list" component={GroupList} />
      <Route exact path="/groups/:id" component={Group} />
    </Switch>
  );
};
