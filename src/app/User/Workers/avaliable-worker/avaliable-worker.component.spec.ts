import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableWorkerComponent } from './avaliable-worker.component';

describe('AvaliableWorkerComponent', () => {
  let component: AvaliableWorkerComponent;
  let fixture: ComponentFixture<AvaliableWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliableWorkerComponent]
    });
    fixture = TestBed.createComponent(AvaliableWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
