import { Action, createReducer, on } from "@ngrx/store";
import { addUser } from "./user.actions";

export interface UserState {
  userToken: string
}

export const initialUserState: UserState = {
  userToken: ''
}

const reducer = createReducer(
  initialUserState,
  on(addUser, (state, {userToken}) => ({
    ...state, userToken: userToken
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}