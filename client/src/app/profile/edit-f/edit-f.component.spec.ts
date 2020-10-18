import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFComponent } from './edit-f.component';

describe('EditFComponent', () => {
  let component: EditFComponent;
  let fixture: ComponentFixture<EditFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
