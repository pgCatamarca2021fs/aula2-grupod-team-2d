import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtComponent } from './usdt.component';

describe('UsdtComponent', () => {
  let component: UsdtComponent;
  let fixture: ComponentFixture<UsdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
