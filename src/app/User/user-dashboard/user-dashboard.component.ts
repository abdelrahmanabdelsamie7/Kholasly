import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  userData!: any;
  constructor(private _HttpClient: HttpClient) {
    this._HttpClient
      .get('http://localhost:8000/api/user/getaccount', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .subscribe((data: any) => {
        this.userData = data;
        console.log(data);
        localStorage.setItem('user_id', data.id);
      });
  }
}
