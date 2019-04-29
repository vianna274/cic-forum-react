import fbase from './';
import firebase from 'firebase';

export const Auth = {
  getAuth: () => {
    return fbase.auth();
  },

  facebookOAuth: () => {
    return new firebase.auth.FacebookAuthProvider();
  }
}