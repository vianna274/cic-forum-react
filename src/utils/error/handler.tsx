import { ErrorType } from './models';
import { REQUEST_CANCELLED } from '../../core/constants';

export const ErrorHandler = {
  getType: (error) => {
    if (!error) { return ErrorType.UNKNOWN; }

    if (error && error.message && error.message === REQUEST_CANCELLED) { return ErrorType.CANCELLED; }

    if (error && error.response && error.response.status === 404) { return ErrorType.FACE_NOT_FOUND; }

    return ErrorType.UNKNOWN;
  },
};
