import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumComponent } from './ethereum.component';

describe('EthereumComponent', () => {
  let component: EthereumComponent;
  let fixture: ComponentFixture<EthereumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthereumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
