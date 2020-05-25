import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFluxComponent } from './edit-flux.component';

describe('EditFluxComponent', () => {
  let component: EditFluxComponent;
  let fixture: ComponentFixture<EditFluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
