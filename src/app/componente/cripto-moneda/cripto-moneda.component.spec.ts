import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptoMonedaComponent } from './cripto-moneda.component';

describe('CriptoMonedaComponent', () => {
  let component: CriptoMonedaComponent;
  let fixture: ComponentFixture<CriptoMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptoMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
