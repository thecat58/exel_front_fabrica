import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdf2Component } from './pdf2.component';

describe('Pdf2Component', () => {
  let component: Pdf2Component;
  let fixture: ComponentFixture<Pdf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pdf2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
