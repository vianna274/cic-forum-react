import React, { createContext, useReducer } from 'react';

import { ContextProps } from '../models';
import { UserAction, UserActionType, UserState, User } from './models';

const userDispatcher = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, user: action.user };
    case UserActionType.SET_FIREBASE_USER:
      return { ...state, firebaseUser: action.firebaseUser };
    case UserActionType.RESET:
      return { ...state, firebaseUser: null, user: null };
    case UserActionType.SET_IN_PROGRESS:
      return { ...state, inProgress: action.inProgress };
    default:
      return state;
  }
};

export const initialContext: UserState = {
  firebaseUser: null as unknown as firebase.User,
  user: null as unknown as User,
  inProgress: true,
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
