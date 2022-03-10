import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableViewChildViewChildrenComponent } from './template-variable-view-child-view-children.component';

describe('TemplateVariableViewChildViewChildrenComponent', () => {
  let component: TemplateVariableViewChildViewChildrenComponent;
  let fixture: ComponentFixture<TemplateVariableViewChildViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateVariableViewChildViewChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVariableViewChildViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
