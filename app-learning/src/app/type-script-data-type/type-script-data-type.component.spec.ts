import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptDataTypeComponent } from './type-script-data-type.component';

describe('TypeScriptDataTypeComponent', () => {
  let component: TypeScriptDataTypeComponent;
  let fixture: ComponentFixture<TypeScriptDataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScriptDataTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeScriptDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
