import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import ProtectedRoute from './protected-route';
import Login from './Login.jsx';
import Page from './Page.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/page" />
      </Route>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/page" component={Page} />
    </Switch>
  );
};

export default Routes;
