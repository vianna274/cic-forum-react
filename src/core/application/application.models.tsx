export interface ApplicationState {
  loading: boolean;
}

export enum ApplicationActionType {
  LOADING = 'loading',
  LOADED = 'loaded'
}

export interface ApplicationAction {
  type: ApplicationActionType;
}