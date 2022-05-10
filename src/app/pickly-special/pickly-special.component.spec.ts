import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklySpecialComponent } from './pickly-special.component';

describe('PicklySpecialComponent', () => {
  let component: PicklySpecialComponent;
  let fixture: ComponentFixture<PicklySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicklySpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
