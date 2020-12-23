import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferDataComponentAComponent } from './tranfer-data-component-a.component';

describe('TranferDataComponentAComponent', () => {
  let component: TranferDataComponentAComponent;
  let fixture: ComponentFixture<TranferDataComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferDataComponentAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferDataComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
