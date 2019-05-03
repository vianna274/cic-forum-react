import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Forum from '../forum';
import Home from '../home';
import Login from '../login';
import Profile from '../profile';
import Signup from '../signup';
import { completeSignup } from '../../utils/guards/completeSignup';
import { waitAuthentication } from '../../utils/guards/waitAuthentication';
import { withAuthentication } from '../../utils/guards/withAuthentication';
import { withoutAuthentication } from '../../utils/guards/withoutAuthentication';
import Auth from '../../shared/auth';
import Header from '../../shared/header';
import FloatButton from '../../shared/float-button';
import { NormalOptions } from '../../shared/float-button/constants';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={waitAuthentication(Home)} />
        <Route path="/login" component={withoutAuthentication(Login)} />
        <Route path="/signup" component={completeSignup(Signup)} />
        <Route path="/forum" component={withAuthentication(Forum)} />
        <Route path="/profile" component={withAuthentication(Profile)} />
        <Route component={waitAuthentication(Home)} />
      </Switch>
      <FloatButton {...NormalOptions}/>
      <ToastContainer />
      <Auth />
    </BrowserRouter>
  );
}
