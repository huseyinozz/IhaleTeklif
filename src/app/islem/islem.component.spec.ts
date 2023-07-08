import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslemComponent } from './islem.component';

describe('IslemComponent', () => {
  let component: IslemComponent;
  let fixture: ComponentFixture<IslemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IslemComponent]
    });
    fixture = TestBed.createComponent(IslemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
