import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoCryptoComponent } from './mercado-crypto.component';

describe('MercadoCryptoComponent', () => {
  let component: MercadoCryptoComponent;
  let fixture: ComponentFixture<MercadoCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
