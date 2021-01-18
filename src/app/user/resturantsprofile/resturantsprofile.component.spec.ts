import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsprofileComponent } from './resturantsprofile.component';

describe('ResturantsprofileComponent', () => {
  let component: ResturantsprofileComponent;
  let fixture: ComponentFixture<ResturantsprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantsprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
