import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-carousel-card',
  templateUrl: './category-carousel-card.component.html',
  styleUrls: ['./category-carousel-card.component.css']
})
export class CategoryCarouselCardComponent implements OnInit {
  @Input() cardImageCarouselData: ICategoryCardImageCarouselData;

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface ICategoryCardImageCarouselData {
  id: number;
  images: string[];
  name: string;
  routerPath: string;
}
