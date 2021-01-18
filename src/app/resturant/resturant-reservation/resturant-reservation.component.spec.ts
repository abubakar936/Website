import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantReservationComponent } from './resturant-reservation.component';

describe('ResturantReservationComponent', () => {
  let component: ResturantReservationComponent;
  let fixture: ComponentFixture<ResturantReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
