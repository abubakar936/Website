import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResturantComplainsComponent } from './admin-resturant-complains.component';

describe('AdminResturantComplainsComponent', () => {
  let component: AdminResturantComplainsComponent;
  let fixture: ComponentFixture<AdminResturantComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResturantComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResturantComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
