import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsmenuComponent } from './resturantsmenu.component';

describe('ResturantsmenuComponent', () => {
  let component: ResturantsmenuComponent;
  let fixture: ComponentFixture<ResturantsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
