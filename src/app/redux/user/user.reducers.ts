import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { deleteUser, userGotError, userGotSuccess } from "./user.actions";

export interface UserState {
  user: User | null
}

export const initialUserState: UserState = {
  user: null
}

const reducer = createReducer(
  initialUserState,
  on(userGotSuccess, (state, {user}) => ({...state, user: user})),
  on(userGotError, (state) => ({...state, user: null})),
  on(deleteUser, (state) => ({...state, user: null}))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}