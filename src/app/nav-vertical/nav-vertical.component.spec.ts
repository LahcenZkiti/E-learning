import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalComponent } from './nav-vertical.component';

describe('NavVerticalComponent', () => {
  let component: NavVerticalComponent;
  let fixture: ComponentFixture<NavVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
