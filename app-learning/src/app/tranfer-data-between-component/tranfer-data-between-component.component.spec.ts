import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferDataBetweenComponentComponent } from './tranfer-data-between-component.component';

describe('TranferDataBetweenComponentComponent', () => {
  let component: TranferDataBetweenComponentComponent;
  let fixture: ComponentFixture<TranferDataBetweenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferDataBetweenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferDataBetweenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
