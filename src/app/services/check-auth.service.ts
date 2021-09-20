import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckAuthService {

  userToken$: Observable<string | null>;

  private userSubject = new BehaviorSubject<string | null>(null);

  // isLogIn$: Observable<boolean>;

  // private isLogInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // this.isLogIn$ = this.isLogInSubject.asObservable();
    this.userToken$ = this.userSubject.asObservable();
  }

  checkAuthUser() {
    if(localStorage.getItem('token')) {
      console.log('CHECK')
      // this.isLogInSubject.next(true);
      let currentToken = localStorage.getItem('token');
      this.userSubject.next(currentToken);
    }
  }

  // get isLogIn() {
  //   return this.isLogInSubject.value;
  // }

  login(newUserToken: string): void {
    this.userSubject.next(newUserToken);
    localStorage.setItem('token', newUserToken);
    // this.isLogInSubject.next(true);
  }

  logout(): void {
    // this.isLogInSubject.next(false);
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }
}
