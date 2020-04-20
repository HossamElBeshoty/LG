import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-image-carousel',
  templateUrl: './card-image-carousel.component.html',
  styleUrls: ['./card-image-carousel.component.css']
})
export class CardImageCarouselComponent implements OnInit {
  // @Input() id: number;
  // @Input() images: string[];
  // @Input() name: string;
  // @Input() paragraph: string;
  @Input() cardImageCarouselData: ICardImageCarouselData;

  constructor() {
  }

  ngOnInit(): void {
  }
}

export interface ICardImageCarouselData {
  id: number;
  images: string[];
  name: string;
  paragraph: string;
  route: ICardImageCarouselRoute[];
}

export interface ICardImageCarouselRoute {
  routerName: string;
  routerPath: string;
}
