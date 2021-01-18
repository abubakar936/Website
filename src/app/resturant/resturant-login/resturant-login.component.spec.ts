import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantLoginComponent } from './resturant-login.component';

describe('ResturantLoginComponent', () => {
  let component: ResturantLoginComponent;
  let fixture: ComponentFixture<ResturantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
