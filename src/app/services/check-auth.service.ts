import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUser, getUser } from '../redux/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class CheckAuthService {

  constructor(private store: Store) {}

  checkAuthUser() {
    if(localStorage.getItem('token')) {
      let currentToken = localStorage.getItem('token');
      if(currentToken) {
        this.store.dispatch(getUser({token: currentToken}));
      }
    }
  }

  login(newUserToken: string): void {
    localStorage.setItem('token', newUserToken);
    this.checkAuthUser();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(deleteUser());
  }
}
