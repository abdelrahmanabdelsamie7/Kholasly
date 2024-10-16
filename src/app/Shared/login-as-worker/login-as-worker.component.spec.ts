import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsWorkerComponent } from './login-as-worker.component';

describe('LoginAsWorkerComponent', () => {
  let component: LoginAsWorkerComponent;
  let fixture: ComponentFixture<LoginAsWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsWorkerComponent]
    });
    fixture = TestBed.createComponent(LoginAsWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
