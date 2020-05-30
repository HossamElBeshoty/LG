import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {IProductImages} from "../../Models/product-images";

@Component({
  selector: 'app-card-image-carousel',
  templateUrl: './card-image-carousel.component.html',
  styleUrls: ['./card-image-carousel.component.css']
})
export class CardImageCarouselComponent implements OnInit {
  @Input() label: string;
  @Input() details: string;
  @Input() images: string[];
  imgApiPath = environment.imageEndPoint;
  constructor() {
  }

  ngOnInit(): void {
  }
}
