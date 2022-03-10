import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponentProjectionComponent } from './toggle-component-projection.component';

describe('ToggleComponentProjectionComponent', () => {
  let component: ToggleComponentProjectionComponent;
  let fixture: ComponentFixture<ToggleComponentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleComponentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
