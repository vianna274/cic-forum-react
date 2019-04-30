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
  UNKNOWN,
  CANCELLED,
  FACE_NOT_FOUND
}