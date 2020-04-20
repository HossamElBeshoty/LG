import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterDetailsComponent } from './products-filter-details.component';

describe('ProductsFilterDetailsComponent', () => {
  let component: ProductsFilterDetailsComponent;
  let fixture: ComponentFixture<ProductsFilterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
