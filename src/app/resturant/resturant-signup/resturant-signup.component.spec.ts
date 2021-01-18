import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantSignupComponent } from './resturant-signup.component';

describe('ResturantSignupComponent', () => {
  let component: ResturantSignupComponent;
  let fixture: ComponentFixture<ResturantSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
