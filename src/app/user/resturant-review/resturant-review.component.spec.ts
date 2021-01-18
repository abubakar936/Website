import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantReviewComponent } from './resturant-review.component';

describe('ResturantReviewComponent', () => {
  let component: ResturantReviewComponent;
  let fixture: ComponentFixture<ResturantReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
