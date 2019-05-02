import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../core/user/reducer';

export const withoutAuthentication = BaseComponent => (props) => {
  const { state } = useContext(UserContext);

  if (!state.inProgress && state.user) { return <Redirect to="/"></Redirect>; }

  return <BaseComponent {...props} />;
};
