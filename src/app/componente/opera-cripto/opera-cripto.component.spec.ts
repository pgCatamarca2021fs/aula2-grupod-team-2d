import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaCriptoComponent } from './opera-cripto.component';

describe('OperaCriptoComponent', () => {
  let component: OperaCriptoComponent;
  let fixture: ComponentFixture<OperaCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperaCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
