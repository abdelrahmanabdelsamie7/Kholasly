import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrls: ['./list-workers.component.css'],
})
export class ListWorkersComponent {
  Workers!: any;
  // constructor(private _HttpClient: HttpClient, private _Router: Router) {
  //   this._HttpClient
  //     .get('http://localhost:8000/api/Workers', {
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
  //       },
  //     })
  //     .subscribe((data: any) => {
  //       console.log(data.data);
  //       this.Workers = data.data;
  //     });
  // }
}
