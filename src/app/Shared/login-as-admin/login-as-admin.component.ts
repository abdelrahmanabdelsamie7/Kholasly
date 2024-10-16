import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-as-admin',
  templateUrl: './login-as-admin.component.html',
  styleUrls: ['./login-as-admin.component.css'],
})
export class LoginAsAdminComponent {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  Login() {
    this._HttpClient
      .post('http://localhost:8000/api/admin/login', this.loginForm.value)
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('adminToken', data.access_token);
        this._Router.navigateByUrl('/admin');
      });
  }
}
