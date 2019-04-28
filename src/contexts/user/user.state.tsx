import React, { createContext, useReducer } from 'react';
import { UserAction, UserState, UserActionType } from './user.models';
import { ContextProps } from '../models';

const userDispatcher = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, username: action.username, auth: true };
    default:
      return state;
  }
};


export const initialContext: UserState = {
  username: '',
  auth: false,
};

export const UserContext = createContext((initialContext as unknown) as ContextProps<UserState>);

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userDispatcher, initialContext as never);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
