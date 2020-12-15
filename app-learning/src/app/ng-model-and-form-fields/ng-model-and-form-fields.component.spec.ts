import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelAndFormFieldsComponent } from './ng-model-and-form-fields.component';

describe('NgModelAndFormFieldsComponent', () => {
  let component: NgModelAndFormFieldsComponent;
  let fixture: ComponentFixture<NgModelAndFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelAndFormFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelAndFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
