import axios, { CancelTokenSource } from 'axios';

import { User, UserSignup } from './models';
import { userMock } from '../../utils/mocks/user.response';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const mock = process.env.REACT_APP_USER_MOCK;

const UserService = {
  getCancelToken: () => axios.CancelToken.source(),

  register: async (user: UserSignup, source: CancelTokenSource) => {
    try {
      const response = await axios.post<User>(`${apiBaseUrl}/user`, { ...user, cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw (err);
    }
  },

  fetch: async (id: string, source: CancelTokenSource) => {
    try {
      const response = await axios.get<User>(`${apiBaseUrl}/user/${id}`, { cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw (err);
    }
  },

  update: async (id: string, user: User, source: CancelTokenSource) => {
    try {
      const response = await axios.put<User>(`${apiBaseUrl}/user/${id}`, { ...user, cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw (err);
    }
  },

  fetchByFacebookId: async (id: string, source: CancelTokenSource) => {
    try {
      const response = await axios.get<User>(`${apiBaseUrl}/facebookUser/${id}`, { cancelToken: source.token });
      return response.data;
    } catch (err) {
      throw (err);
    }
  },
};

const UserServiceStub = {
  getCancelToken: () => axios.CancelToken.source(),

  register: async (user: UserSignup, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw (err);
    }
  },

  fetch: async (id: string, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw (err);
    }
  },

  update: async (id: string, user: User, source: CancelTokenSource) => {
    try {
      return user;
    } catch (err) {
      throw (err);
    }
  },

  fetchByFacebookId: async (id: string, source: CancelTokenSource) => {
    try {
      return userMock;
    } catch (err) {
      throw (err);
    }
  }
};

export default mock ? UserServiceStub : UserService;
