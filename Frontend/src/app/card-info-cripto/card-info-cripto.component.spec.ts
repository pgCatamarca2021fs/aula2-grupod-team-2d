import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoCriptoComponent } from './card-info-cripto.component';

describe('CardInfoCriptoComponent', () => {
  let component: CardInfoCriptoComponent;
  let fixture: ComponentFixture<CardInfoCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
