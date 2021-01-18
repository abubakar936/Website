import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllResturantsComponent } from './admin-all-resturants.component';

describe('AdminAllResturantsComponent', () => {
  let component: AdminAllResturantsComponent;
  let fixture: ComponentFixture<AdminAllResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
