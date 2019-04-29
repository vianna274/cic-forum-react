import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../../domain/home';
import Login from '../../domain/login';
import Header from '../header';
import Signup from '../../domain/signup';
import Forum from '../../domain/forum';
import withAuthentication from '../../core/firebase/withAuthentication';
import withoutAuthentication from '../../core/firebase/withoutAuthentication';
import { UserActionType } from '../../core/user/user.models';
import { Auth } from '../../core/firebase/auth';
import { UserContext } from '../../core/user/user.state';
import { ApplicationContext } from '../../core/application/application.state';
import { ApplicationActionType } from '../../core/application/application.models';

export default function Router() {
  const { dispatch: userDispatch } = useContext(UserContext);
  const { dispatch: appDispatch } = useContext(ApplicationContext);

  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setUser = (user: firebase.User) => userDispatch({ user, type: UserActionType.SET_USER })
  const removeUser = () => userDispatch({ type: UserActionType.REMOVE_USER })

  useEffect(() => {
    setLoading();
    Auth.getAuth().onAuthStateChanged((user) => {
      user ? setUser(user as firebase.User) : removeUser();
      setLoaded();
    });
    // eslint-disable-next-line
  }, []);
  
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={withoutAuthentication(Login)} />
      <Route path="/signup" exact component={withoutAuthentication(Signup)} />
      <Route path="/forum" exact component={withAuthentication(Forum)} />
    </BrowserRouter>
  );
}