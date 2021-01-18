import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReservationsComponent } from './confirm-reservations.component';

describe('ConfirmReservationsComponent', () => {
  let component: ConfirmReservationsComponent;
  let fixture: ComponentFixture<ConfirmReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
