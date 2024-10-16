import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as-user',
  templateUrl: './register-as-user.component.html',
  styleUrls: ['./register-as-user.component.css'],
})
export class RegisterAsUserComponent {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  selectedFile: File | null = null;
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }
  register() {
    if (this.registerForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    const formData = new FormData();
    formData.append('name', this.registerForm.get('name')?.value || '');
    formData.append('email', this.registerForm.get('email')?.value || '');
    formData.append('password', this.registerForm.get('password')?.value || '');
    formData.append(
      'password_confirmation',
      this.registerForm.get('password_confirmation')?.value || ''
    );
    formData.append('phone', this.registerForm.get('phone')?.value || '');
    formData.append('address', this.registerForm.get('address')?.value || '');

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this._HttpClient
      .post('http://localhost:8000/api/user/register', formData)
      .subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem('token', data.access_token);
          this._Router.navigateByUrl('/admin');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
