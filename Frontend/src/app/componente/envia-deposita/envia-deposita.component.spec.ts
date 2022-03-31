import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaDepositaComponent } from './envia-deposita.component';

describe('EnviaDepositaComponent', () => {
  let component: EnviaDepositaComponent;
  let fixture: ComponentFixture<EnviaDepositaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviaDepositaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaDepositaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
