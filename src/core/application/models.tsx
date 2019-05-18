export interface ApplicationState {
  loading: boolean;
  modal: boolean;
}

export enum ApplicationActionType {
  LOADING = 'loading',
  LOADED = 'loaded',
  MODAL = 'modal',
}

export interface ApplicationAction {
  type: ApplicationActionType;
  modal?: boolean;
}
