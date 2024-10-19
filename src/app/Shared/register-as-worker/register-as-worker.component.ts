import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as-worker',
  templateUrl: './register-as-worker.component.html',
  styleUrls: ['./register-as-worker.component.css'],
})
export class RegisterAsWorkerComponent {
  Categories!: any;
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this._HttpClient
      .get('http://localhost:8000/api/Categories')
      .subscribe((data: any) => {
        // console.log(data);
        this.Categories = data.data;
      });
  }
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    profileDescription: new FormControl('', [Validators.required]),
    is_available: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
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
    formData.append(
      'profileDescription',
      this.registerForm.get('profileDescription')?.value || ''
    );
    formData.append(
      'is_available',
      this.registerForm.get('is_available')?.value || ''
    );
    formData.append(
      'category_id',
      this.registerForm.get('category_id')?.value || ''
    );
    formData.append('phone', this.registerForm.get('phone')?.value || '');
    formData.append('address', this.registerForm.get('address')?.value || '');

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this._HttpClient
      .post('http://localhost:8000/api/worker/register', formData)
      .subscribe(
        (data: any) => {
          console.log(data);
          this._Router.navigateByUrl('/LoginWorker');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
