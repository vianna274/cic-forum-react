import fbase from '.';
import firebase from 'firebase';

export const FirebaseAuth = {
  getAuth: () => {
    return fbase.auth();
  },

  facebookOAuth: () => {
    return new firebase.auth.FacebookAuthProvider();
  },
};
