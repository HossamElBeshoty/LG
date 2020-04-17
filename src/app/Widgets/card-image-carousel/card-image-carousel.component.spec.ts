import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageCarouselComponent } from './card-image-carousel.component';

describe('CardImageCarouselComponent', () => {
  let component: CardImageCarouselComponent;
  let fixture: ComponentFixture<CardImageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
