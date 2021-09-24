import { createAction, props } from '@ngrx/store';

export enum LocationActions {
  GetLocation = 'Get Location',
  ChangeLocation = 'Change Location',
  LocationGotSuccess = 'Location Got Success',
  LocationGotError = 'Location Got Error',
}

export const getLocation = createAction(LocationActions.GetLocation);

export const locationGotSuccess = createAction(LocationActions.LocationGotSuccess, props<{ location: string }>());

export const locationGotError = createAction(LocationActions.LocationGotError);

export const changeLocation = createAction(LocationActions.ChangeLocation, props<{ location: string }>());
