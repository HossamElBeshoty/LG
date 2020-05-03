import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ICategoryCardImageCarouselData} from '../../../Widgets/category-carousel-card/category-carousel-card.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  galleryData: ICategoryCardImageCarouselData[];

  constructor() {
    this.galleryData = [
      {
        id: 1,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Tablets',
        routerPath: 'tablets'
      },
      {
        id: 2,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Frames',
        routerPath: 'frames'
      },
      {
        id: 3,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Clocks',
        routerPath: 'clocks'
      },
      {
        id: 4,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Vases',
        routerPath: 'vases'
      },
      {
        id: 5,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Antiques',
        routerPath: 'antiques'
      },
      {
        id: 6,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Crystal',
        routerPath: 'crystal'
      },
      {
        id: 7,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Mirrors',
        routerPath: 'mirrors'
      }];
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Gallery Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }
}
