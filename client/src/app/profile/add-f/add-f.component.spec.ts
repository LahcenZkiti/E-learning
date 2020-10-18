import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFComponent } from './add-f.component';

describe('AddFComponent', () => {
  let component: AddFComponent;
  let fixture: ComponentFixture<AddFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
