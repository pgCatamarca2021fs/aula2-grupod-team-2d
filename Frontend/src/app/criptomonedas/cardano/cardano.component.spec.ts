import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardanoComponent } from './cardano.component';

describe('CardanoComponent', () => {
  let component: CardanoComponent;
  let fixture: ComponentFixture<CardanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
