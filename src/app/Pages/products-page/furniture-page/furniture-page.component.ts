import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
// import {ICardImageCarouselData} from '../../../Widgets/card-image-carousel/card-image-carousel.component';
import {ICategoryCardImageCarouselData} from '../../../Widgets/category-carousel-card/category-carousel-card.component';

@Component({
  selector: 'app-furniture-page',
  templateUrl: './furniture-page.component.html',
  styleUrls: ['./furniture-page.component.css']
})
export class FurniturePageComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  // furnitureData: ICategoryCardImageCarouselData[];

  constructor() {
    // this.furnitureData = [
    //   {
    //     id: 1,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'Bed Room',
    //     routerPath: 'bed-room'
    //   },
    //   {
    //     id: 2,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'Dining Room',
    //     routerPath: 'dining-room'
    //   },
    //   {
    //     id: 3,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'Shoe Cabinet',
    //     routerPath: 'shoe-cabinet'
    //   },
    //   {
    //     id: 4,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'TV Tables',
    //     routerPath: 'tv-tables'
    //   },
    //   {
    //     id: 5,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'Furniture Tables',
    //     routerPath: 'furniture-tables'
    //   },
    //   {
    //     id: 6,
    //     images: [
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //       'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //     ],
    //     name: 'Other',
    //     routerPath: 'other'
    //   }];
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Furniture Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

}
