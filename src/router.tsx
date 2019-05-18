import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Auth from './shared/auth';
import FloatButton from './shared/float-button';
import { NormalOptions } from './shared/float-button/constants';
import Header from './shared/header';
import { completeSignup } from './utils/guards/completeSignup';
import { waitAuthentication } from './utils/guards/waitAuthentication';
import { withAuthentication } from './utils/guards/withAuthentication';
import { withoutAuthentication } from './utils/guards/withoutAuthentication';
import Forum from './domain/forum';
import Home from './domain/home';
import Login from './domain/login';
import Profile from './domain/profile';
import Signup from './domain/signup';
import Privacy from './domain/privacy';
import { UserContext } from './core/user/reducer';

export default function Router() {
  const { state } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={waitAuthentication(Home)} />
        <Route path="/login" component={withoutAuthentication(Login)} />
        <Route path="/signup" component={completeSignup(Signup)} />
        <Route path="/forum" component={withAuthentication(Forum)} />
        <Route path="/profile" component={withAuthentication(Profile)} />
        <Route path="/privacy" component={Privacy} />
        <Route component={waitAuthentication(Home)} />
      </Switch>
      {state.user && <FloatButton {...NormalOptions} />}
      <Auth />
    </BrowserRouter>
  );
}
