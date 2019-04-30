import axios, { CancelTokenSource } from 'axios';

import { User, UserSignup } from './models';

const localApi = process.env.REACT_APP_LOCAL_API;

export const UserService = {
  getCancelToken: () => axios.CancelToken.source(),

  register: async (user: UserSignup, source: CancelTokenSource) => {
    try {
      const response = await axios.post<User>(`${localApi}/user`, {...user, cancelToken: source.token });
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

  getFacebook: async (id: string, source: CancelTokenSource) => {
    try {
      const response = await axios.get<User>(`${localApi}/facebookUser/${id}`, { cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw(err);
    }
  }
}