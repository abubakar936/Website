import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignUpComponent } from './adminsign-up.component';

describe('AdminsignUpComponent', () => {
  let component: AdminsignUpComponent;
  let fixture: ComponentFixture<AdminsignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
