import './signup.scss';

import { Button, Paper, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { ApplicationActionType } from '../../contexts/application/application.models';
import { ApplicationContext } from '../../contexts/application/application.state';
import { UserContext } from '../../contexts/user/user.state';
import { Auth } from '../../services/auth';

interface SignupState {
  firstName: string;
  lastName: string;
  birthDay: string;
  username: string;
  password: string;
}

export default function Signup() {

  const { dispatch } = useContext(ApplicationContext);
  const { state: userState } = useContext(UserContext);

  const setLoaded = () => dispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => dispatch({ type: ApplicationActionType.LOADING });

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    birthDay: '1999-01-01',
    username: '',
    password: ''
  } as SignupState);

  const {
    firstName,
    lastName,
    birthDay,
    username,
    password
  } = state;

  const handleChange = (field: keyof SignupState, event: React.ChangeEvent) => {
    const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
    const { value } = inputEvent.target;
    setState({ ...state, [field]: value });
  }

  const submit = async (event) => {
    try {
      event.preventDefault();
      setLoading();
      await Auth.register(state);
    } catch(err) {
      // Show some error
      console.error(err);
    }
    setLoaded();
  }

  if (userState.auth) { return <Redirect to="/"></Redirect> };

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
            value={firstName}
            onChange={(event) => handleChange('firstName', event)}
            fullWidth
          />
          <TextField
            required
            id="lastName"
            label="last name"
            margin="normal"
            autoComplete="lname"
            value={lastName}
            onChange={(event) => handleChange('lastName', event)}
            fullWidth
          />
          <TextField
            required
            id="birthDay"
            label="birth day"
            margin="normal"
            autoComplete="bday"
            type="date"
            value={birthDay}
            onChange={(event) => handleChange('birthDay', event)}
            fullWidth
          />
          <TextField
            required
            id="username"
            label="username"
            margin="normal"
            autoComplete="username"
            value={username}
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
            value={password}
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