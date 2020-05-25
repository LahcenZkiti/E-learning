import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxActiviteComponent } from './flux-activite.component';

describe('FluxActiviteComponent', () => {
  let component: FluxActiviteComponent;
  let fixture: ComponentFixture<FluxActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
