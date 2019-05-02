import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { ApplicationActionType } from '../../core/application/models';
import { ApplicationContext } from '../../core/application/reducer';
import { REQUEST_CANCELLED } from '../../core/constants';
import { ErrorHandler } from '../../utils/error/handler';
import { ErrorType } from '../../utils/error/models';
import { FirebaseAuth } from '../../core/firebase/handler';
import { User, UserActionType } from '../../core/user/models';
import { UserContext } from '../../core/user/reducer';
import { UserService } from '../../core/user/service';
import { toast } from 'react-toastify';
import { ERROR_MESSAGES } from '../../utils/error/constants';

function Auth({ history }) {
  const { dispatch: userDispatch } = useContext(UserContext);
  const { dispatch: appDispatch } = useContext(ApplicationContext);

  const cancelToken = UserService.getCancelToken();

  const setLoading = () => appDispatch({ type: ApplicationActionType.LOADING });
  const setLoaded = () => appDispatch({ type: ApplicationActionType.LOADED });

  const setUser = (user: User) => userDispatch({ user, type: UserActionType.SET_USER });
  const setInProgress = (inProgress: boolean) =>
    userDispatch({ inProgress, type: UserActionType.SET_IN_PROGRESS });
  const setFirebaseUser = (firebaseUser: firebase.User) =>
    userDispatch({ firebaseUser, type: UserActionType.SET_FIREBASE_USER });
  const resetUser = () => userDispatch({ type: UserActionType.RESET });

  useEffect(() => {
    setLoading();
    setInProgress(true);

    FirebaseAuth.getAuth().onAuthStateChanged(async (user: firebase.User | null) => {
      try {
        if (!user) { return resetUser(); }

        setFirebaseUser(user);
        const dbUser = await UserService.getFacebook(user.uid, cancelToken);
        setUser(dbUser);
      } catch (err) {
        const type = ErrorHandler.getType(err);

        if (type === ErrorType.CANCELLED) { return; }
        if (type === ErrorType.FACE_NOT_FOUND) { return history.push('signup'); }

        FirebaseAuth.getAuth().signOut();
        history.push('/');
        console.error(err);
        toast.error(ERROR_MESSAGES.LOGIN_FAILED, { position: toast.POSITION.BOTTOM_LEFT   });
      } finally {
        setLoaded();
        setInProgress(false);
      }
    });

    return () => cancelToken.cancel(REQUEST_CANCELLED);
    // eslint-disable-next-line
  }, []);

  return <></>;
}

export default withRouter(Auth);
