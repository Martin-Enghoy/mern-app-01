import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from './mods/user/pages/Users'
import NewPlace from "./mods/places/pages/NewPlace";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";

const App = () => {

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
