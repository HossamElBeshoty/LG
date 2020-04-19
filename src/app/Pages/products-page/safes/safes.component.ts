import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ICardImageCarouselData} from '../../../Widgets/card-image-carousel/card-image-carousel.component';

declare function isotopeProduct(): any;

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit, AfterViewInit {
  homeData: ICardImageCarouselData;

  constructor() {
    this.homeData = {
      id: 1,
      images: ['assets/images/Products/Safes3/safes/safes', 'assets/images/Products/300.jpg', 'assets/images/Products/300.jpg'],
      name: 'Home',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
      route: [
        {routerName: 'Digital', routerPath: 'asd'},
        {routerName: 'Colored', routerPath: 'asd'},
        {routerName: 'Motorized', routerPath: 'asd'},
        {routerName: 'Cash Box', routerPath: 'asd'},
        {routerName: 'Book Safe', routerPath: 'asd'},
      ]
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    isotopeProduct();
  }
}
