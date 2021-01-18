import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDineinResturantsComponent } from './admin-dinein-resturants.component';

describe('AdminDineinResturantsComponent', () => {
  let component: AdminDineinResturantsComponent;
  let fixture: ComponentFixture<AdminDineinResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDineinResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDineinResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
