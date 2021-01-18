import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenceledReservationsComponent } from './cenceled-reservations.component';

describe('CenceledReservationsComponent', () => {
  let component: CenceledReservationsComponent;
  let fixture: ComponentFixture<CenceledReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenceledReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenceledReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
