import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CencelDeliveriesComponent } from './cencel-deliveries.component';

describe('CencelDeliveriesComponent', () => {
  let component: CencelDeliveriesComponent;
  let fixture: ComponentFixture<CencelDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CencelDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CencelDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
