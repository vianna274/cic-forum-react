import './login.scss';

import { Button, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { Col, Container } from 'react-bootstrap';

import { ApplicationActionType } from '../../core/application/models';
import { ApplicationContext } from '../../core/application/reducer';
import { FirebaseAuth } from '../../core/firebase/handler';
import { UserActionType } from '../../core/user/models';
import { UserContext } from '../../core/user/reducer';

export default function Login() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const setInProgress = (inProgress: boolean) => userDispatch({ inProgress, type: UserActionType.SET_IN_PROGRESS });

  const facebookAuth = async (ev) => {
    try {
      setLoading();
      setInProgress(true);
      ev.preventDefault();

      const facebookAuthProvider = FirebaseAuth.facebookOAuth();
      const auth = FirebaseAuth.getAuth();

      auth.currentUser
        ? await auth.currentUser.linkWithPopup(facebookAuthProvider)
        : await auth.signInWithPopup(facebookAuthProvider);

    } catch (err) {
      console.error(err);
      FirebaseAuth.getAuth().signOut();
    } finally {
      setInProgress(false);
      setLoaded();
    }
  };

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
