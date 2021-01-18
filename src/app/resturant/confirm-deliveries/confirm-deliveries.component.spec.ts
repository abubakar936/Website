import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeliveriesComponent } from './confirm-deliveries.component';

describe('ConfirmDeliveriesComponent', () => {
  let component: ConfirmDeliveriesComponent;
  let fixture: ComponentFixture<ConfirmDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
