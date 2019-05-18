import './style.scss';

import { Button, Paper } from '@material-ui/core';
import React, { useContext } from 'react';

import { ApplicationActionType } from '../../core/application/models';
import { ApplicationContext } from '../../core/application/reducer';
import { FirebaseAuth } from '../../core/firebase/handler';
import { UserActionType } from '../../core/user/models';
import { UserContext } from '../../core/user/reducer';
import { toast } from 'react-toastify';

export default function Login() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const setInProgress = (inProgress: boolean) =>
    userDispatch({ inProgress, type: UserActionType.SET_IN_PROGRESS });

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
      toast.error("There's something wrong with your account, contact any admin to solve it");
    } finally {
      setInProgress(false);
      setLoaded();
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center login-page">
      <Paper
        className="paper input-group px-0 col-10 col-sm-8 col-md-6 ">
        <p className="description mt-4 text-center">Login with the option below :)</p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          id="sign-in-button"
          className="sign-in-button mt-5 mb-3 mx-5"
          onClick={ev => facebookAuth(ev)}
        >
          Sign in with Facebook
          </Button>
      </Paper>
    </div>
  );
}
