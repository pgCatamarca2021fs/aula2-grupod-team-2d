import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPesoComponent } from './cuenta-peso.component';

describe('CuentaPesoComponent', () => {
  let component: CuentaPesoComponent;
  let fixture: ComponentFixture<CuentaPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaPesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
