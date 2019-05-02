import React, { useContext } from 'react';
import { UserContext } from '../../core/user/reducer';

export const waitAuthentication = BaseComponent => (props) => {

  const { state: userState } = useContext(UserContext);

  if (userState.inProgress) { return <></>; }

  return <BaseComponent {...props}/>;
};
