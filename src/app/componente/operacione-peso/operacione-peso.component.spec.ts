import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionePesoComponent } from './operacione-peso.component';

describe('OperacionePesoComponent', () => {
  let component: OperacionePesoComponent;
  let fixture: ComponentFixture<OperacionePesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionePesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionePesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
