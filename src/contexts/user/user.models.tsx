export interface User {
  firstName: string;
  lastName: string;
  username: string;
  birthDay: string;
  id: string;
}

export interface UserState {
  username: string;
  auth: boolean;
}

export enum UserActionType {
  SET_USER = 'set_user'
}

export interface UserAction {
  type: UserActionType;
  username?: string;
  password?: string;
}