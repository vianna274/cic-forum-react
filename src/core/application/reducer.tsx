import React, { createContext, useReducer } from 'react';
import { ApplicationState, ApplicationAction, ApplicationActionType } from './models';
import { ContextProps } from '../models';

const applicationDispatcher = (state: ApplicationState, action: ApplicationAction) => {
  switch (action.type) {
    case ApplicationActionType.LOADED:
      return { ...state, loading: false };
    case ApplicationActionType.LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const initialContext: ApplicationState = { loading: false };

export const ApplicationContext =
  createContext(initialContext as unknown as ContextProps<ApplicationState>);

export default function ApplicationProvider({ children }) {
  const [state, dispatch] = useReducer(applicationDispatcher, initialContext);
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
}
