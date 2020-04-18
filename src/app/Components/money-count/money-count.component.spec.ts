import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCountComponent } from './money-count.component';

describe('MoneyCountComponent', () => {
  let component: MoneyCountComponent;
  let fixture: ComponentFixture<MoneyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
