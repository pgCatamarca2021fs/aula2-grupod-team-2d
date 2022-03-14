import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothLovePotionComponent } from './smooth-love-potion.component';

describe('SmoothLovePotionComponent', () => {
  let component: SmoothLovePotionComponent;
  let fixture: ComponentFixture<SmoothLovePotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoothLovePotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothLovePotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
