import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UserActions {
  GetUser = "Get User",
  UserGotSuccess = 'User Got Success',
  UserGotError = 'User Got Error',
  DeleteUser = "Delete User"
}

export const getUser = createAction( UserActions.GetUser, props<{ token: string }>() );

export const userGotSuccess = createAction( UserActions.UserGotSuccess, 
  props<{ user: User }>());

export const userGotError = createAction( UserActions.UserGotError );

export const deleteUser = createAction( UserActions.DeleteUser );