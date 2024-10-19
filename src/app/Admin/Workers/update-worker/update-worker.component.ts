import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.css'],
})
export class UpdateWorkerComponent {
  Categories!: any;
  workerData!: any;
  id!: any;
  constructor(
    private _HttpClient: HttpClient,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    // Get All Categories
    this._HttpClient
      .get('http://localhost:8000/api/Categories')
      .subscribe((data: any) => {
        this.Categories = data.data;
      });
    this.id = this._ActivatedRoute.snapshot.params?.['id'];
    this._HttpClient
      .get(`http://localhost:8000/api/Workers/${this.id}`)
      .subscribe((data: any) => {
        this.workerData = data.data;
      });
  }
  updateWorker = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    status: new FormControl(''),
    is_available: new FormControl(''),
    profileDescription: new FormControl(''),
    category_id: new FormControl(''),
  });
  update() {
    this._HttpClient
      .put(
        `http://localhost:8000/api/Workers/${this.id}`,
        this.updateWorker.value,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('adminToken'),
          },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
        this._Router.navigateByUrl(`/Worker/${this.id}`);
      });
  }
}
