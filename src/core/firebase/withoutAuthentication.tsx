import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../user/user.state';

const withoutAuthentication = BaseComponent => props => {
  const { state } = useContext(UserContext);

  if (state.user) { return <Redirect to="/"></Redirect>; }

  return <BaseComponent {...props} />;
}

export default withoutAuthentication;