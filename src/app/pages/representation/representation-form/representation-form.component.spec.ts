import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationFormComponent } from './representation-form.component';

describe('RepresentationFormComponent', () => {
  let component: RepresentationFormComponent;
  let fixture: ComponentFixture<RepresentationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
