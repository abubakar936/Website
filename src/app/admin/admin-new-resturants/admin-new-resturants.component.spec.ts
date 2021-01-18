import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewResturantsComponent } from './admin-new-resturants.component';

describe('AdminNewResturantsComponent', () => {
  let component: AdminNewResturantsComponent;
  let fixture: ComponentFixture<AdminNewResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
