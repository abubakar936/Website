import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryResturantsComponent } from './admin-delivery-resturants.component';

describe('AdminDeliveryResturantsComponent', () => {
  let component: AdminDeliveryResturantsComponent;
  let fixture: ComponentFixture<AdminDeliveryResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeliveryResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeliveryResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
