import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterByTagComponent } from './product-filter-by-tag.component';

describe('ProductFilterByTagComponent', () => {
  let component: ProductFilterByTagComponent;
  let fixture: ComponentFixture<ProductFilterByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFilterByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilterByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
