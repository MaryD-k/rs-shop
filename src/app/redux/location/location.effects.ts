import { Injectable } from '@angular/core';
import { LocationService } from '@core/services/location.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LocationActions, locationGotError, locationGotSuccess } from './location.actions';

@Injectable({ providedIn: 'root' })
export class LocationEffects {
  constructor(private actions$: Actions, private locationService: LocationService) {}

  AddUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.GetLocation),
      switchMap(() => this.locationService.getLocation()),
      map((result: any) => {
        const location = result.results[0].components.city;
        return locationGotSuccess({
          location,
        });
      }),
      catchError(() => of(locationGotError()))
    )
  );
}
