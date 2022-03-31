import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinancecoinComponent } from './binancecoin.component';

describe('BinancecoinComponent', () => {
  let component: BinancecoinComponent;
  let fixture: ComponentFixture<BinancecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinancecoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinancecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
