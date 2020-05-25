import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActiviteComponent } from './ajout-activite.component';

describe('AjoutActiviteComponent', () => {
  let component: AjoutActiviteComponent;
  let fixture: ComponentFixture<AjoutActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
