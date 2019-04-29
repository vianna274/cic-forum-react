import './login.scss';

import { Button, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { ApplicationActionType } from '../../core/application/application.models';
import { ApplicationContext } from '../../core/application/application.state';
import { UserActionType } from '../../core/user/user.models';
import { UserContext } from '../../core/user/user.state';
import { Auth } from '../../core/firebase/auth';

export default function Login() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { state, dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setUser = (user: firebase.User) => userDispatch({ user, type: UserActionType.SET_USER });

  const authHandler = (authData: firebase.auth.UserCredential) => {
    authData && authData.user ? setUser(authData.user) : console.error('Error authenticating');
  };

  const facebookAuth = async (ev) => {
    try {
      setLoading();
      ev.preventDefault();

      const facebookAuthProvider = Auth.facebookOAuth();
      const auth = Auth.getAuth();

      const authData = auth.currentUser
        ? await auth.currentUser.linkWithPopup(facebookAuthProvider)
        : await auth.signInWithPopup(facebookAuthProvider);
      authHandler(authData);

    } catch (err) {
      console.error(err);
    }
    setLoaded();
  };

  if (state.user) { return <Redirect to="/"></Redirect> };

  return (
    <Container
      className="d-flex justify-content-center"
      fluid>
      <Col
        className="input-group px-0"
        xs={6}>
        <Paper
          className="paper">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="sign-in-button"
            className="sign-in-button mt-5"
            onClick={(ev) => facebookAuth(ev)}
          >
            Sign in with Facebook
          </Button>
        </Paper>
      </Col>
    </Container>
  );
}
