import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
})
export class ShowCategoryComponent {
  id!: any;
  Workers!: any;
  CategoryData!: any;
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
  deleteWorker(id: any) {
    this._HttpClient
      .delete(`http://localhost:8000/api/Workers/${id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .subscribe((data: any) => {
        window.location.reload();
      });
  }
}
