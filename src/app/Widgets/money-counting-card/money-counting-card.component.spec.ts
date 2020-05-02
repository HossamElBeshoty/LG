import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCountingCardComponent } from './money-counting-card.component';

describe('MoneyCountingCardComponent', () => {
  let component: MoneyCountingCardComponent;
  let fixture: ComponentFixture<MoneyCountingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCountingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCountingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
