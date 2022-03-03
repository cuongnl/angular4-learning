import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionExcuteComponent } from './content-projection-excute.component';

describe('ContentProjectionExcuteComponent', () => {
  let component: ContentProjectionExcuteComponent;
  let fixture: ComponentFixture<ContentProjectionExcuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionExcuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionExcuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
