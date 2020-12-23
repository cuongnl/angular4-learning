import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeLifeCycleComponent } from './ng-on-change-life-cycle.component';

describe('NgOnChangeLifeCycleComponent', () => {
  let component: NgOnChangeLifeCycleComponent;
  let fixture: ComponentFixture<NgOnChangeLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangeLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangeLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
