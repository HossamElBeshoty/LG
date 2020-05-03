import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ICategoryCardImageCarouselData} from '../../../Widgets/category-carousel-card/category-carousel-card.component';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css']
})
export class LightingComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  lightingData: ICategoryCardImageCarouselData[];

  constructor() {
    this.lightingData = [
      {
        id: 1,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Chandeliers',
        routerPath: 'chandeliers'
      },
      {
        id: 2,
        images: [
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
          'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
        ],
        name: 'Bedside Lamps',
        routerPath: 'bedside-lamps'
      }];
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Lighting Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }
}
