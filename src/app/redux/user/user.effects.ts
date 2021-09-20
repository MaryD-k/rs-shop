import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { User } from "src/app/models/user.model";
import { UserHttpService } from "src/app/services/user-http.service";
import { UserActions, userGotError, userGotSuccess } from "./user.actions";

@Injectable({ providedIn: 'root' })
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userHttpService: UserHttpService) {}

  AddUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.GetUser),
    switchMap((action: {token: string}) => this.userHttpService.getUserInfo(action.token)),
    map((userInfo: User) =>
      userGotSuccess({
        user: userInfo,
      })
    ),
    catchError(() => of(userGotError()))
  )
);
}

