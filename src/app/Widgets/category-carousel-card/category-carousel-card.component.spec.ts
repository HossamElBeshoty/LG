import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCarouselCardComponent } from './category-carousel-card.component';

describe('CategoryCarouselCardComponent', () => {
  let component: CategoryCarouselCardComponent;
  let fixture: ComponentFixture<CategoryCarouselCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCarouselCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
