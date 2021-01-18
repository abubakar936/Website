import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedeliveriesComponent } from './confirmedeliveries.component';

describe('ConfirmedeliveriesComponent', () => {
  let component: ConfirmedeliveriesComponent;
  let fixture: ComponentFixture<ConfirmedeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
