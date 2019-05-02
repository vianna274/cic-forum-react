import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../core/user/reducer';

export const completeSignup = BaseComponent => (props) => {

  const { state } = useContext(UserContext);

  if (state.user || (!state.inProgress && !state.firebaseUser)) {
    return <Redirect to="/"></Redirect>;
  }

  if (state.inProgress) { return <h1> Loading </h1>; }

  return <BaseComponent {...props} />;
};
