import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  addCategory = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    expected_price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{2,8})?$/),
    ]),
  });
  Add() {
    this._HttpClient
      .post('http://localhost:8000/api/Categories', this.addCategory.value, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .subscribe((data: any) => {
        console.log(data);
        this._Router.navigateByUrl('/Categories');
      });
  }

}
