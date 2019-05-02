import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../core/user/reducer';

export const withAuthentication = BaseComponent => (props) => {

  const { state: userState } = useContext(UserContext);

  if (!userState.inProgress && !userState.user) { return <Redirect to="/"></Redirect>; }

  return (userState.user
    ? <BaseComponent {...props} />
    : <></>
  );
};
