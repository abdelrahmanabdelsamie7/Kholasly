import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  adminData!: any;
  constructor(private _HttpClient: HttpClient) {
    this._HttpClient
      .get('http://localhost:8000/api/admin/getaccount', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
        },
      })
      .subscribe((data: any) => {
        this.adminData = data;
        console.log(data);
      });
  }
}
