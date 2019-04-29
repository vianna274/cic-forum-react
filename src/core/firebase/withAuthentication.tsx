import React, { useEffect, useContext, useState } from 'react';

import { Auth } from '../firebase/auth';
import { UserContext } from '../user/user.state';
import { UserActionType } from '../user/user.models';
import { Redirect } from 'react-router-dom';

const withAuthentication = BaseComponent => props => {
  const { state: userState, dispatch } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const setUser = (user: firebase.User) => dispatch({ user, type: UserActionType.SET_USER })
  const removeUser = () => dispatch({ type: UserActionType.REMOVE_USER })

  useEffect(() => {
    Auth.getAuth().onAuthStateChanged((user) => {
      if (user) { return setUser(user); }
      setRedirect(true);
      return removeUser();
    });
    // eslint-disable-next-line
  }, []);

  if (redirect) { return <Redirect to="/"></Redirect>; }

  return (userState.auth
    ? <BaseComponent {...props} />
    : <h1>Loading</h1>
  );
}

export default withAuthentication;