import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css'],
})
export class AllWorkersComponent {
  Workers!: any;
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this._HttpClient
      .get('http://localhost:8000/api/Workers')
      .subscribe((data: any) => {
        console.log(data.data);
        this.Workers = data.data;
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
        console.log(data);
        window.location.reload();
      });
  }
}
