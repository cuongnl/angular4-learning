import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcuteServiceComponent } from './excute-service.component';

describe('ExcuteServiceComponent', () => {
  let component: ExcuteServiceComponent;
  let fixture: ComponentFixture<ExcuteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcuteServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcuteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
