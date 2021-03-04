import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoggedIn {
  user: any;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(newUser){
    return this.http.post('http://167.99.203.217/api/user/register', newUser)
  }

  loginIn(user){
    return this.http.post<LoggedIn>('http://167.99.203.217/api/user/auth', user)
  }

}
