import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-worker',
  templateUrl: './show-worker.component.html',
  styleUrls: ['./show-worker.component.css'],
})
export class ShowWorkerComponent {
  id!: any;
  workerData!: any;
  constructor(
    private _HttpClient: HttpClient,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.id = this._ActivatedRoute.snapshot.params?.['id'];
    this._HttpClient
      .get(`http://localhost:8000/api/Workers/${this.id}`)
      .subscribe((data: any) => {
        console.log(data);

        this.workerData = data.data;
      });
  }
}
