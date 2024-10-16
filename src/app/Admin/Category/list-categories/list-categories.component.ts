import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  Categories!: any;
  constructor(private _HttpClient: HttpClient  ,private _Router:Router) {
    this._HttpClient
      .get('http://localhost:8000/api/Categories', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .subscribe((data: any) => {
        console.log(data.data);
        this.Categories = data.data;
      });
  }
  deleteCategory(id:any ){
    this._HttpClient.delete(`http://localhost:8000/api/Categories/${id}` , {headers : {Authorization : 'Bearer ' + localStorage.getItem('adminToken')}}).subscribe((data:any) =>{
      console.log(data);
      window.location.reload();
    })
  }
}

