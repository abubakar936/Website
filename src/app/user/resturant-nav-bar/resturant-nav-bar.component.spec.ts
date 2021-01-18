import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantNavBarComponent } from './resturant-nav-bar.component';

describe('ResturantNavBarComponent', () => {
  let component: ResturantNavBarComponent;
  let fixture: ComponentFixture<ResturantNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
