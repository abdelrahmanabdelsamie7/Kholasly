import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsWorkerComponent } from './register-as-worker.component';

describe('RegisterAsWorkerComponent', () => {
  let component: RegisterAsWorkerComponent;
  let fixture: ComponentFixture<RegisterAsWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAsWorkerComponent]
    });
    fixture = TestBed.createComponent(RegisterAsWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
