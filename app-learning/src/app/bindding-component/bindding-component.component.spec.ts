import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinddingComponentComponent } from './bindding-component.component';

describe('BinddingComponentComponent', () => {
  let component: BinddingComponentComponent;
  let fixture: ComponentFixture<BinddingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinddingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinddingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
