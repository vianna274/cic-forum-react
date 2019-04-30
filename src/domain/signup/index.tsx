import './signup.scss';

import { Button, Paper, TextField } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { ApplicationActionType } from '../../core/application/models';
import { ApplicationContext } from '../../core/application/reducer';
import { UserContext } from '../../core/user/reducer';
import { ErrorResponse } from '../../core/error/models';
import { UserSignup, User, UserActionType } from '../../core/user/models';
import { UserService } from '../../core/user/service';
import { REQUEST_CANCELLED } from '../../core/constants';

interface SignupState {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export default function Signup() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { state:userState, dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const setUser = (user: User) => userDispatch({ user, type: UserActionType.SET_USER });

  const cancelToken = UserService.getCancelToken();

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  } as SignupState);

  // eslint-disable-next-line
  useEffect(() => () => cancelToken.cancel(REQUEST_CANCELLED), []);

  const handleChange = (field: keyof SignupState, event: React.ChangeEvent) => {
    const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
    const { value } = inputEvent.target;
    setState({ ...state, [field]: value });
  }

  const submit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading();
      const { uid } = userState.firebaseUser!;
      const userData: UserSignup = { ...state, facebookUid: uid };
      const user = await UserService.register(userData, cancelToken);
      setUser(user);
    } catch(err) {
      const error: ErrorResponse = err;
      if (!error.response || error.response.status !== 404) { console.error(err); }
    }
    setLoaded();
  }

  return (
    <Container fluid className="d-flex justify-content-center">
      <Paper className="d-flex align-items-center flex-column col-10 col-sm-8 col-md-6">
        <h2 className="">Preencha seus dados para registrar-se</h2>
        <form onSubmit={(e) => submit(e)}>
          <TextField
            required
            id="firstName"
            label="first name"
            margin="normal"
            autoComplete="fname"
            value={state.firstName}
            onChange={(event) => handleChange('firstName', event)}
            fullWidth
          />
          <TextField
            required
            id="lastName"
            label="last name"
            margin="normal"
            autoComplete="lname"
            value={state.lastName}
            onChange={(event) => handleChange('lastName', event)}
            fullWidth
          />
          <TextField
            required
            id="username"
            label="username"
            margin="normal"
            autoComplete="username"
            value={state.username}
            onChange={(event) => handleChange('username', event)}
            fullWidth
          />
          <TextField
            required
            id="password"
            label="password"
            margin="normal"
            type="password"
            autoComplete="password"
            value={state.password}
            onChange={(event) => handleChange('password', event)}
            fullWidth
          />
          <Button
            className="my-3 send-button"
            variant="contained"
            fullWidth
            color="primary"
            type="submit">
            Submit
        </Button>
        </form>
      </Paper>
    </Container>
  );
}