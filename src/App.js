import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from './mods/user/pages/Users'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
