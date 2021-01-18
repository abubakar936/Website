import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDeliveriesComponent } from './completed-deliveries.component';

describe('CompletedDeliveriesComponent', () => {
  let component: CompletedDeliveriesComponent;
  let fixture: ComponentFixture<CompletedDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
