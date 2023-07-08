import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AciklamaComponent } from './aciklama.component';

describe('AciklamaComponent', () => {
  let component: AciklamaComponent;
  let fixture: ComponentFixture<AciklamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AciklamaComponent]
    });
    fixture = TestBed.createComponent(AciklamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
