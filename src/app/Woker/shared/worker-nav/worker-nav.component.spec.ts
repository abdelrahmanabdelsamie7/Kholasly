import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerNavComponent } from './worker-nav.component';

describe('WorkerNavComponent', () => {
  let component: WorkerNavComponent;
  let fixture: ComponentFixture<WorkerNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerNavComponent]
    });
    fixture = TestBed.createComponent(WorkerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
