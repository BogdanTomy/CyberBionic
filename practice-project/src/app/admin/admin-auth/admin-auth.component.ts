import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.sass']
})
export class AdminAuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  authForm: FormGroup;

  ngOnInit(): void {
    this.authForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  submitReg(form): void {
    this.auth.register(form.value)
      .subscribe(res => {
        console.log(res);
      });
  }

  submitLogin(form): void {
    this.auth.logIn(form.value)
      .subscribe(res => {
        console.log(res);
        if (res.user) {
          this.router.navigate(['admin/panel']);
        }
      });
  }
}
