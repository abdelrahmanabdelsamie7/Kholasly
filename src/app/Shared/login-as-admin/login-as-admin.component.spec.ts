import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsAdminComponent } from './login-as-admin.component';

describe('LoginAsAdminComponent', () => {
  let component: LoginAsAdminComponent;
  let fixture: ComponentFixture<LoginAsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsAdminComponent]
    });
    fixture = TestBed.createComponent(LoginAsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
