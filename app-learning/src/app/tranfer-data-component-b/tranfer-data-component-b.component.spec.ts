import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferDataComponentBComponent } from './tranfer-data-component-b.component';

describe('TranferDataComponentBComponent', () => {
  let component: TranferDataComponentBComponent;
  let fixture: ComponentFixture<TranferDataComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferDataComponentBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferDataComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
