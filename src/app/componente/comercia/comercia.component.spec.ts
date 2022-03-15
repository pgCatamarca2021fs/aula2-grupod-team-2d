import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciaComponent } from './comercia.component';

describe('ComerciaComponent', () => {
  let component: ComerciaComponent;
  let fixture: ComponentFixture<ComerciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComerciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComerciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
