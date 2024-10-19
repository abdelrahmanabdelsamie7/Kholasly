import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-nav',
  templateUrl: './worker-nav.component.html',
  styleUrls: ['./worker-nav.component.css']
})
export class WorkerNavComponent {
  constructor(private _Router: Router) {}
  logout() {
    localStorage.clear();
    this._Router.navigateByUrl('/');
  }
}
