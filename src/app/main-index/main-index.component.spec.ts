import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndexComponent } from './main-index.component';

describe('MainIndexComponent', () => {
  let component: MainIndexComponent;
  let fixture: ComponentFixture<MainIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
