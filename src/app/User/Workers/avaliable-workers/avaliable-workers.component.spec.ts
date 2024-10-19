import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableWorkersComponent } from './avaliable-workers.component';

describe('AvaliableWorkersComponent', () => {
  let component: AvaliableWorkersComponent;
  let fixture: ComponentFixture<AvaliableWorkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliableWorkersComponent]
    });
    fixture = TestBed.createComponent(AvaliableWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
