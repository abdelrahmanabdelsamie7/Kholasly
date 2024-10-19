import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliable-workers',
  templateUrl: './avaliable-workers.component.html',
  styleUrls: ['./avaliable-workers.component.css'],
})
export class AvaliableWorkersComponent {
  allData: any[] = []; // بيانات الفئات تأتي هنا
  constructor(private _HttpClient: HttpClient) {
    this._HttpClient
      .get('http://localhost:8000/api/Categories')
      .subscribe((data: any) => {
        this.allData = data.data;
        console.log(this.allData);
      });
  }
  hasActiveWorkers(category: any): boolean {
    return (
      category.workers &&
      category.workers.some((worker: any) => worker.status === 1)
    );
  }

}
