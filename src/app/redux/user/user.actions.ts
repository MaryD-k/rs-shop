import { createAction, props } from '@ngrx/store';

export enum UserActions {
  AddUserToken = "ADD_USER_TOKEN",
}

export const addUser = createAction( UserActions.AddUserToken, props<{ userToken: string }>() );