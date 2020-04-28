import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCountingDetailsComponent } from './money-counting-details.component';

describe('MoneyCountingDetailsComponent', () => {
  let component: MoneyCountingDetailsComponent;
  let fixture: ComponentFixture<MoneyCountingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCountingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCountingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
