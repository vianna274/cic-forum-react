import axios, { CancelTokenSource } from 'axios';

import { User, UserSignup } from './models';
import { userMock } from '../../utils/mocks/user.response';

const localApi = process.env.REACT_APP_LOCAL_API;
const mock = process.env.REACT_APP_USER_MOCK;
console.log(process.env.REACT_APP_USER_MOCK);
export const UserService = !mock 
? {
  getCancelToken: () => axios.CancelToken.source(),

  register: async (user: UserSignup, source: CancelTokenSource) => {
    try {
      const response = await axios.post<User>(`${localApi}/user`, { ...user, cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw (err);
    }
  },

  get: async (id: string, source: CancelTokenSource) => {
    try {
      const response = await axios.get<User>(`${localApi}/user/${id}`, { cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw(err);
    }
  },

  update: async (id: string, user: User, source: CancelTokenSource) => {
    try {
      const response = await axios.put<User>(`${localApi}/user/${id}`, { ...user, cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw(err);
    }
  },

  getFacebook: async (id: string, source: CancelTokenSource) => {
    try {
      const response = await axios.get<User>(`${localApi}/facebookUser/${id}`, { cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw(err);
    }
  }
} 
: {
  getCancelToken: () => axios.CancelToken.source(),

  register: async (user: UserSignup, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw (err);
    }
  },

  get: async (id: string, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw(err);
    }
  },

  update: async (id: string, user: User, source: CancelTokenSource) => {
    try {
      return user;
    } catch (err) {
      throw(err);
    }
  },

  getFacebook: async (id: string, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw(err);
    }
  }
};