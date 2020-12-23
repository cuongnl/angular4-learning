import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponentDirectiveComponent } from './input-component-directive.component';

describe('InputComponentDirectiveComponent', () => {
  let component: InputComponentDirectiveComponent;
  let fixture: ComponentFixture<InputComponentDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponentDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
