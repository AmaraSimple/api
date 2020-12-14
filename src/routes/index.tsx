import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Private from './private';
import Public from './public';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

import Dashboard from '../pages/Dashboard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Public path="/" exact component={Home} />
      <Public path="/sobre" exact component={About} />

      <Public path="/entrar" exact component={Login} />
      <Public path="/cadastrar" exact component={Register} />

      <Private path="/dashboard" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
