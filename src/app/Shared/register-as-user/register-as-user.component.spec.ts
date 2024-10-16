import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsUserComponent } from './register-as-user.component';

describe('RegisterAsUserComponent', () => {
  let component: RegisterAsUserComponent;
  let fixture: ComponentFixture<RegisterAsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAsUserComponent]
    });
    fixture = TestBed.createComponent(RegisterAsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
