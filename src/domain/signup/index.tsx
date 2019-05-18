import './style.scss';

import { Button, Checkbox, FormControlLabel, Icon, Modal, Paper, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

import { ApplicationActionType } from '../../core/application/models';
import { ApplicationContext } from '../../core/application/reducer';
import { REQUEST_CANCELLED } from '../../core/constants';
import { User, UserActionType, UserSignup } from '../../core/user/models';
import { UserContext } from '../../core/user/reducer';
import UserService from '../../core/user/service';
import { ErrorResponse } from '../../utils/error/models';
import Privacy from '../privacy';

interface SignupState {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  acceptedTerms: boolean;
}

export default function Signup() {

  const { dispatch: appDispatch, state: appState } = useContext(ApplicationContext);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setModal = (modal: boolean) => appDispatch({ modal, type: ApplicationActionType.MODAL });

  const setUser = (user: User) => userDispatch({ user, type: UserActionType.SET_USER });

  const cancelToken = UserService.getCancelToken();

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  } as SignupState);

  // eslint-disable-next-line
  useEffect(() => () => cancelToken.cancel(REQUEST_CANCELLED), []);

  const handleChange = (field: keyof SignupState, event: React.ChangeEvent) => {
    const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
    const { value } = inputEvent.target;
    setState({ ...state, [field]: value });
  };

  const submit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading();
      const { uid } = userState.firebaseUser!;
      const userData: UserSignup = { ...state, facebookUid: uid };
      const user = await UserService.register(userData, cancelToken);
      setUser(user);
    } catch (err) {
      const error: ErrorResponse = err;

      if (!error.response || error.response.status !== 404) { console.error(err); }
    }
    setLoaded();
  };

  const renderModal = () =>
    <Modal
      open={appState.modal}
      onClose={() => setModal(false)}>
      <div className="container signup-modal flex-column">
        <div className="row justify-content-end">
          <Icon
            className="close-button"
            onClick={() => setModal(false)}>
            close
          </Icon>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 px-3 py-3 privacy-content">
            <Privacy />
          </div>
        </div>
      </div>
    </Modal>;

  return (
    <div className="container-fluid d-flex justify-content-center signup">
      {renderModal()}
      <Paper className="d-flex align-items-center flex-column col-10 col-sm-8 col-md-6 px-4 py-3">
        <h3 className="">Fill the form to continue</h3>
        <form
          className="col-12 d-flex justify-content-center flex-column"
          onSubmit={event => submit(event)}>
          <TextField
            required
            id="firstName"
            className="my-2"
            label="first name"
            margin="normal"
            autoComplete="fname"
            value={state.firstName}
            onChange={event => handleChange('firstName', event)}
            fullWidth
          />
          <TextField
            required
            id="lastName"
            className="my-2"
            label="last name"
            margin="normal"
            autoComplete="lname"
            value={state.lastName}
            onChange={event => handleChange('lastName', event)}
            fullWidth
          />
          <TextField
            required
            id="username"
            className="my-2"
            label="username"
            margin="normal"
            autoComplete="username"
            value={state.username}
            onChange={event => handleChange('username', event)}
            fullWidth
          />
          <TextField
            required
            id="password"
            className="my-2"
            label="password"
            margin="normal"
            type="password"
            autoComplete="password"
            value={state.password}
            onChange={event => handleChange('password', event)}
            fullWidth
          />
          <div className="row justify-content-center">
            <Button onClick={() => setModal(!appState.modal)}>
              Show terms
            </Button>
          </div>
          <div className="row justify-content-center">
            <FormControlLabel
              control={<Checkbox
                required
                value={state.acceptedTerms}
                checked={state.acceptedTerms}
                onChange={_ => setState({ ...state, acceptedTerms: !state.acceptedTerms })} />}
                label="I've read the terms and i accept it"
                />
          </div>
          <div className="row justify-content-center">
            <Button
              className="my-3 send-button main-button"
              variant="contained"
              fullWidth
              type="submit">
              Submit
              </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
