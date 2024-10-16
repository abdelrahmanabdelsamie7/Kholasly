import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent {
  constructor(private _Router: Router) {}
  logout() {
    localStorage.clear();
    this._Router.navigateByUrl('/');
  }
}
