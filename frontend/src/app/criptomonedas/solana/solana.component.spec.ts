import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolanaComponent } from './solana.component';

describe('SolanaComponent', () => {
  let component: SolanaComponent;
  let fixture: ComponentFixture<SolanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
