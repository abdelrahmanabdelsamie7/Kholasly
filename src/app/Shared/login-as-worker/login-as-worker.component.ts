import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-as-worker',
  templateUrl: './login-as-worker.component.html',
  styleUrls: ['./login-as-worker.component.css'],
})
export class LoginAsWorkerComponent {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  Login() {
    this._HttpClient
      .post('http://localhost:8000/api/worker/login', this.loginForm.value)
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('workerToken', data.access_token);
        this._Router.navigateByUrl('/Worker');
      });
  }
}
