import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { CheckAuthService } from 'src/app/services/check-auth.service';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-account-block',
  templateUrl: './account-block.component.html',
  styleUrls: ['./account-block.component.scss']
})
export class AccountBlockComponent implements OnInit {

  isAuthPopUpOpen: boolean;

  isAccountBlockOpen: boolean;

  isRegPopUpOpen: boolean;

  login: string;

  password: string;

  name: string;

  lastName: string;

  isUserLogIn: boolean;

  currentUser: User | null;

  @Output() isClosePopUp = new EventEmitter<boolean>(false);

  constructor(private router: Router,
    private userHttpService: UserHttpService,
    private checkAuthService: CheckAuthService,
    private store: Store) { }

  ngOnInit(): void {
    this.isAuthPopUpOpen = false;
    this.isAccountBlockOpen = true;
    this.isRegPopUpOpen = false;
    this.store.subscribe((results: any) => {
      this.currentUser = results.userState.user;
    });
  }

  toChosen() {
    this.router.navigate(['/chosen']);
  }

  openAuthPopUp() {
    this.isAuthPopUpOpen = true;
    this.isAccountBlockOpen = false;
  }

  closeAccountBlock() {
    this.isClosePopUp.emit(true);
  }

  loginUser() {
    this.userHttpService.loginUser(this.login, this.password).subscribe(
      (token: any) => {
        let userToken = token.token; 
        this.checkAuthService.login(userToken);
      },
      error => console.log(error) //вывести что такое пользователя нет
    );
    this.login = '';
    this.password = '';
    this.closeAccountBlock();
  }

  openRegPopUp() {
    this.isAuthPopUpOpen = false;
    this.isAccountBlockOpen = false;
    this.isRegPopUpOpen = true;
  }

  registerUser() {
    this.userHttpService.registerUser(this.name, this.lastName, this.login, this.password).subscribe(
      (token: any) => {
        let userToken = token.token; 
        this.checkAuthService.login(userToken);
      },
      error => console.log(error) //вывести что такой пользователь есть
    );
    this.login = '';
    this.password = '';
    this.name = '';
    this.lastName = '';
    this.closeAccountBlock();
  }

  logout() {
    this.checkAuthService.logout();
    this.closeAccountBlock();
  }

  closeAuthorization() {
    this.isAuthPopUpOpen = false;
    this.isAccountBlockOpen = false;
    this.isRegPopUpOpen = false;
    this.isClosePopUp.next(false);
  }

}
