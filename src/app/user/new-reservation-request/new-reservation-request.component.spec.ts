import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationRequestComponent } from './new-reservation-request.component';

describe('NewReservationRequestComponent', () => {
  let component: NewReservationRequestComponent;
  let fixture: ComponentFixture<NewReservationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReservationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
