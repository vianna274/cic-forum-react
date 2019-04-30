import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Forum from '../../domain/forum';
import Home from '../../domain/home';
import Login from '../../domain/login';
import Signup from '../../domain/signup';
import { completeSignup } from '../../utils/guards/completeSignup';
import { withAuthentication } from '../../utils/guards/withAuthentication';
import { withoutAuthentication } from '../../utils/guards/withoutAuthentication';
import Auth from '../auth';
import Header from '../header';
import Profile from '../../domain/profile';

export default function Router() {

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={withoutAuthentication(Login)} />
      <Route path="/signup" exact component={completeSignup(Signup)} />
      <Route path="/forum" exact component={withAuthentication(Forum)} />
      <Route path="/profile" exact component={withAuthentication(Profile)} />
      <Auth />
    </BrowserRouter>
  );
}