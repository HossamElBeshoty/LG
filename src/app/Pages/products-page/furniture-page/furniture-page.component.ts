import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ICardImageCarouselData} from '../../../Widgets/card-image-carousel/card-image-carousel.component';

@Component({
  selector: 'app-furniture-page',
  templateUrl: './furniture-page.component.html',
  styleUrls: ['./furniture-page.component.css']
})
export class FurniturePageComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  furnitureData: ICardImageCarouselData;
  lightingData: ICardImageCarouselData;
  galleryData: ICardImageCarouselData;

  constructor() {
    this.furnitureData = {
      id: 1,
      images: [
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
      ],
      name: 'Furniture',
      // tslint:disable-next-line:max-line-length
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
      route: [
        {routerName: 'Bed Room', routerPath: 'bed-room'},
        {routerName: 'Dining Room', routerPath: 'dining-room'},
        {routerName: 'Shoe Cabinet', routerPath: 'shoe-cabinet'},
        {routerName: 'TV Tables', routerPath: 'tv-tables'},
        {routerName: 'Furniture Tables', routerPath: 'furniture-tables'},
        {routerName: 'Other', routerPath: 'other'},
      ]
    };
    this.lightingData = {
      id: 2,
      images: [
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
      ],
      name: 'Lighting',
      // tslint:disable-next-line:max-line-length
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
      route: [
        {routerName: 'Chandeliers', routerPath: 'chandeliers'},
        {routerName: 'Bedside Lamps', routerPath: 'bedside-lamps'},
      ]
    };
    this.galleryData = {
      id: 3,
      images: [
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
        'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
      ],
      name: 'Gallery',
      // tslint:disable-next-line:max-line-length
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
      route: [
        {routerName: 'Tablets', routerPath: 'tablets'},
        {routerName: 'Frames', routerPath: 'frames'},
        {routerName: 'Clocks', routerPath: 'clocks'},
        {routerName: 'Vases', routerPath: 'cases'},
        {routerName: 'Antiques', routerPath: 'antiques'},
        {routerName: 'Crystal', routerPath: 'crystal'},
        {routerName: 'Mirrors', routerPath: 'mirrors'},
      ]
    };
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Furniture Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

}
