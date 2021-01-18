import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationRequestsComponent } from './new-reservation-requests.component';

describe('NewReservationRequestsComponent', () => {
  let component: NewReservationRequestsComponent;
  let fixture: ComponentFixture<NewReservationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReservationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
