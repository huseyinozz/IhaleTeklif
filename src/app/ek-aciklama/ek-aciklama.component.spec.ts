import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkAciklamaComponent } from './ek-aciklama.component';

describe('EkAciklamaComponent', () => {
  let component: EkAciklamaComponent;
  let fixture: ComponentFixture<EkAciklamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkAciklamaComponent]
    });
    fixture = TestBed.createComponent(EkAciklamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
