export interface User {
  firstName: string;
  lastName: string;
  username: string;
  birthDay: string;
  id: string;
}

export interface UserState {
  user: firebase.User;
  auth: boolean;
}

export enum UserActionType {
  SET_USER = 'set_user',
  REMOVE_USER = 'remove_user'
}

export interface UserAction {
  type: UserActionType;
  user?: firebase.User;
}