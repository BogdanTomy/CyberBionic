import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface LoggedIn {
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post('http://167.99.203.217/api/user/register', user);
  }

  logIn(user) {
    return this.http.post<LoggedIn>('http://167.99.203.217/api/user/auth', user);
  }
}
