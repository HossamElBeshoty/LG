import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoneyCountingComponent } from './money-counting.component';
describe('MoneyCountingComponent', () => {
  let component: MoneyCountingComponent;
  let fixture: ComponentFixture<MoneyCountingComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCountingComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
