import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRtlComponent } from './nav-bar-rtl.component';

describe('NavBarRtlComponent', () => {
  let component: NavBarRtlComponent;
  let fixture: ComponentFixture<NavBarRtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarRtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
