import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiComponent } from './dai.component';

describe('DaiComponent', () => {
  let component: DaiComponent;
  let fixture: ComponentFixture<DaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
