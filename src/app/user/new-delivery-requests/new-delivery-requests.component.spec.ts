import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliveryRequestsComponent } from './new-delivery-requests.component';

describe('NewDeliveryRequestsComponent', () => {
  let component: NewDeliveryRequestsComponent;
  let fixture: ComponentFixture<NewDeliveryRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewDeliveryRequestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeliveryRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
