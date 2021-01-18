import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedReservationsComponent } from './completed-reservations.component';

describe('CompletedReservationsComponent', () => {
  let component: CompletedReservationsComponent;
  let fixture: ComponentFixture<CompletedReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
