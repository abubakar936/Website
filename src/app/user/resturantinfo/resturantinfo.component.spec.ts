import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantinfoComponent } from './resturantinfo.component';

describe('ResturantinfoComponent', () => {
  let component: ResturantinfoComponent;
  let fixture: ComponentFixture<ResturantinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
