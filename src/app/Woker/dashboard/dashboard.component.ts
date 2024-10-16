import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  workerData!: any;
  constructor(private _HttpClient: HttpClient) {
    this._HttpClient
      .get('http://localhost:8000/api/worker/getaccount', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('workerToken'),
        },
      })
      .subscribe((data: any) => {
        this.workerData = data;
        console.log(data);
      });
  }
}
