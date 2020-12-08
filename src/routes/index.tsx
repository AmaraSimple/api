import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" exact component={About} />
    </Switch>
  </BrowserRouter>
);

export default Router;
