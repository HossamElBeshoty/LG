import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryFilterDetailsComponent } from './product-category-filter-details.component';

describe('ProductCategoryFilterDetailsComponent', () => {
  let component: ProductCategoryFilterDetailsComponent;
  let fixture: ComponentFixture<ProductCategoryFilterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryFilterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryFilterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
