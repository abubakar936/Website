import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantDashboardComponent } from './resturant-dashboard.component';

describe('ResturantDashboardComponent', () => {
  let component: ResturantDashboardComponent;
  let fixture: ComponentFixture<ResturantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResturantDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
