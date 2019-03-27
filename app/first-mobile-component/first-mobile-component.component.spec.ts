import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMobileComponentComponent } from './first-mobile-component.component';

describe('FirstMobileComponentComponent', () => {
  let component: FirstMobileComponentComponent;
  let fixture: ComponentFixture<FirstMobileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMobileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
