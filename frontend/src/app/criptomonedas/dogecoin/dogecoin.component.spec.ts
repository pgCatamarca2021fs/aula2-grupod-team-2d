import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogecoinComponent } from './dogecoin.component';

describe('DogecoinComponent', () => {
  let component: DogecoinComponent;
  let fixture: ComponentFixture<DogecoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogecoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
