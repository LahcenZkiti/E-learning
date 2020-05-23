import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFComponent } from './list-f.component';

describe('ListFComponent', () => {
  let component: ListFComponent;
  let fixture: ComponentFixture<ListFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
