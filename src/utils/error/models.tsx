export interface ErrorData {
  config: any;
  data: any;
  headers: any;
  status: number;
  statusText: string;
}

export interface ErrorResponse {
  config: any;
  request: any;
  response: ErrorData;
}

export enum ErrorType {
  UNKNOWN = 'Unknown',
  CANCELLED = 'Cancelled',
  FACE_NOT_FOUND = 'Face not found',
  INVALID_DATA = 'Invalid data',
}
