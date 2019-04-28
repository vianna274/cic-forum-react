import './login.scss';

import { Button, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { ApplicationActionType } from '../../contexts/application/application.models';
import { ApplicationContext } from '../../contexts/application/application.state';
import { UserActionType } from '../../contexts/user/user.models';
import { UserContext } from '../../contexts/user/user.state';
import { Auth } from '../../services/auth';


interface LoginState {
  username: string;
  password: string;
  logged: boolean;
}

export default function Login() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { state, dispatch: userDispatch } = useContext(UserContext);

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setUser = (username: string) => userDispatch({ username, type: UserActionType.SET_USER });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (event) => {
    event.preventDefault();
    login(username, password);
  }

  const handleChange = (name: keyof LoginState) => event => {
    if (name === 'username') { return setUsername(event.target.value); }
    setPassword(event.target.value);
  };

  const login = async (username: string, password: string) => {
    try {
      setLoading();
      const response = await Auth.login(username, password);
      setUser(response.username);
      console.log('User logged ' + JSON.stringify(response));
    } catch (err) {
      // TODO: Exibir modal de erro
      console.error(err);
    }

    setLoaded();
  }
  
  if (state.auth) { return <Redirect to="/"></Redirect> };

  return (
    <Container
      className="d-flex justify-content-center"
      fluid>
      <Col
        className="input-group px-0"
        xs={6}>
        <Paper
          className="paper">
          <form onSubmit={(e) => submit(e)}>
            <div className="px-3">
              <TextField
                required
                id="username"
                label="username"
                value={username}
                onChange={handleChange('username')}
                margin="normal"
                autoComplete="username"
                fullWidth
              />
              <TextField
                required
                id="password"
                label="password"
                autoComplete="password"
                type="password"
                value={password}
                onChange={handleChange('password')}
                margin="normal"
                fullWidth
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              id="sign-in-button"
              className="sign-in-button mt-5"
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </Col>
    </Container>
  );
}
