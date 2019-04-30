import React, { useState, useEffect, useContext } from 'react'
import { User, UserActionType } from '../../core/user/models';
import { TextField, Paper, Button } from '@material-ui/core';
import { ErrorHandler } from '../../utils/error/handler';
import { ErrorType } from '../../utils/error/models';
import { UserService } from '../../core/user/service';
import { UserContext } from '../../core/user/reducer';
import { ApplicationContext } from '../../core/application/reducer';
import { ApplicationActionType } from '../../core/application/models';

export default function Profile() {

  const { dispatch: appDispatch } = useContext(ApplicationContext);
  const { dispatch: userDispatch, state: { user } } = useContext(UserContext);
  const [formState, setFormState] = useState(user!);

  const cancelToken = UserService.getCancelToken();

  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });
  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });

  const setUser = (user: User) => userDispatch({ user, type: UserActionType.SET_USER });

  // eslint-disable-next-line
  useEffect(() => () => cancelToken.cancel(), []);

  const submit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading();

      const updatedUser: User = { ...user, ...formState };
      const response = await UserService.update(user!.id, updatedUser, cancelToken);

      setUser(response);
      setFormState(response);
    } catch (err) {
      const type = ErrorHandler.getType(err);

      if (type === ErrorType.CANCELLED) { return; }
      if (type === ErrorType.UNKNOWN) { return console.error(err); }
    } finally {
      setLoaded();
    }
  }

  const reset = () => {
    setFormState(user!);
  }

  const handleChange = (field: keyof User, event: React.ChangeEvent) => {
    const inputEvent = event as React.ChangeEvent<HTMLInputElement>;
    const { value } = inputEvent.target;
    setFormState({ ...formState, [field]: value });
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <Paper className="d-flex justify-content-center flex-column mt-5 col-10 col-sm-8">
        <form
          className="d-flex flex-column align-items-center px-3"
          onSubmit={(ev) => submit(ev)}>
          <h1 className="pt-3">My profile</h1>
          <TextField
            className="my-2"
            label="First name"
            value={formState.firstName}
            onChange={(ev) => handleChange('firstName', ev)}
            fullWidth>
          </TextField>
          <TextField
            className="my-2"
            label="Last name"
            onChange={(ev) => handleChange('lastName', ev)}
            value={formState.lastName}
            fullWidth>
          </TextField>
          <TextField
            className="my-2"
            label="Username"
            onChange={(ev) => handleChange('username', ev)}
            value={formState.username}
            fullWidth>
          </TextField>
          <div className="row">
            <Button
              className="my-3 mx-2"
              type="submit"
              variant="contained"
              color="primary">
              Save changes
            </Button>
            <Button
              className="my-3 mx-2"
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}