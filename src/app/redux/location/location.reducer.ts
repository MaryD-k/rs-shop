import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { changeLocation, locationGotError, locationGotSuccess } from "./location.actions";

export interface LocationState {
  location: string
}

export const initialLocationState: LocationState = {
  location: ''
}

const reducer = createReducer(
  initialLocationState,
  on(changeLocation, (state, {location}) => ({...state, location: location})),
  on(locationGotSuccess, (state, {location}) => {
    return {...state, location: location}
  }),
  on(locationGotError, (state) => ({...state, location: ''}))
);

export function locationReducer(state: LocationState | undefined, action: Action) {
  return reducer(state, action);
}