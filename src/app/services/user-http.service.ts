import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private httpClient: HttpClient) {}

  registerUser(name: string, lastName: string, login: string, password: string) {
    const user = {
      firstName: name,
      lastName,
      login,
      password,
    };
    return this.httpClient.post('/users/register', user);
  }

  loginUser(login: string, password: string) {
    return this.httpClient.post('/users/login', { login, password });
  }

  getUserInfo(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<User>(`/users/userInfo`, { headers });
  }
}
