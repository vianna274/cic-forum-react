import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../../domain/home';
import Login from '../../domain/login';
import Header from '../header';
import Signup from '../../domain/signup';
import Forum from '../../domain/forum';

export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/forum" exact component={Forum} />
    </BrowserRouter>
  );
}