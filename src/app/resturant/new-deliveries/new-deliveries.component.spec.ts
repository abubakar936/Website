import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliveriesComponent } from './new-deliveries.component';

describe('NewDeliveriesComponent', () => {
  let component: NewDeliveriesComponent;
  let fixture: ComponentFixture<NewDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
