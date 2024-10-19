import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliable-worker',
  templateUrl: './avaliable-worker.component.html',
  styleUrls: ['./avaliable-worker.component.css'],
})
export class AvaliableWorkerComponent {
  workerData!: any;
  showPaymentModal = false; // متغير للتحكم في ظهور النموذج
  id!: any;
  payment_method!: any;
  constructor(
    private _HttpClient: HttpClient,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.id = this._ActivatedRoute.snapshot.params?.['id'];
    this._HttpClient
      .get(`http://localhost:8000/api/Workers/${this.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('workerToken'),
        },
      })
      .subscribe((data: any) => {
        this.workerData = data.data;
        console.log(data);
      });
  }
  openPaymentModal() {
    this.showPaymentModal = true; // يظهر النموذج عند الضغط على الزر
  }
  closeModal() {
    this.showPaymentModal = false; // إغلاق النموذج
  }
  submitOrder(id: any) {
    this._HttpClient
      .post(
        'http://localhost:8000/api/Orders',
        {
          user_id: localStorage.getItem('user_id'),
          worker_id: id,
          status: 'Pending',
          payment_method: this.payment_method,
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
