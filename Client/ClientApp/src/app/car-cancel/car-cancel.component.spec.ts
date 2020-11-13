import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCancelComponent } from './car-cancel.component';

describe('CarCancelComponent', () => {
  let component: CarCancelComponent;
  let fixture: ComponentFixture<CarCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
