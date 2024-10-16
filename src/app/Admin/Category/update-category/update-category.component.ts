import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent {
  id!: any;
  Workers!: any;
  CategoryData!: any;
  updateCategory = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    expected_price: new FormControl('', [Validators.required]),
  });
  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.id = this._ActivatedRoute.snapshot.params?.['id'];
    console.log(this.id);
    this._HttpClient
      .get(`http://localhost:8000/api/Categories/${this.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.CategoryData = data.data;
        this.Workers = data.data.workers;
      });
  }
  update() {
    this._HttpClient
      .put(
        `http://localhost:8000/api/Categories/${this.id}`,
        this.updateCategory.value,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
          },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this._Router.navigateByUrl('/Categories');
      });
  }
}
