import React, { createContext, useReducer } from 'react';
import { ForumState, ForumAction, ForumActionType } from './models';
import { ContextProps } from '../../core/models';

const dispatcher = (state: ForumState, action: ForumAction) => {
  switch (action.type) {
    case ForumActionType.SET_SEMESTERS:
      return { ...state, semesters: action.semesters };
    default:
      return state;
  }
};

const initialContext: ForumState = { semesters: [] };

export const ForumContext = createContext((initialContext as unknown) as ContextProps<ForumState>);

export default function ForumProvider({ children }) {
  const [state, dispatch] = useReducer(dispatcher, initialContext);
  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
}
