export interface User {
  firstName: string;
  lastName: string;
  username: string;
  id: string;
}

export interface UserState {
  firebaseUser?: firebase.User;
  user?: User;
  inProgress: boolean;
}

export enum UserActionType {
  SET_USER = 'set_user',
  SET_FIREBASE_USER = 'set_firebase_user',
  RESET = 'reset',
  SET_IN_PROGRESS = 'set_in_progress',
}

export interface UserAction {
  type: UserActionType;
  firebaseUser?: firebase.User;
  user?: User;
  inProgress?: boolean;
}

export interface UserSignup {
  facebookUid: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
