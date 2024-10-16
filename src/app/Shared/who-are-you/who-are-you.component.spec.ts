import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreYouComponent } from './who-are-you.component';

describe('WhoAreYouComponent', () => {
  let component: WhoAreYouComponent;
  let fixture: ComponentFixture<WhoAreYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoAreYouComponent]
    });
    fixture = TestBed.createComponent(WhoAreYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
