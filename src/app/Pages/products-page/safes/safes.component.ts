import {Component, OnInit, AfterViewInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

declare function isotopeProduct(): any;

@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit, AfterViewInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  // homeData: ICardImageCarouselData;
  // officeData: ICardImageCarouselData;
  // fireproofData: ICardImageCarouselData;

  constructor() {
    // this.homeData = {
    //   id: 1,
    //   images: [
    //     'assets/images/Products/Safes3/safes/safes/Home%20safe/Book%20Safe/img%20(33).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/Home%20safe/Cash%20box/img%20(31).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/Home%20safe/Digital/img%20(20).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/Home%20safe/Motorized/img%20(17).jpeg',
    //   ],
    //   name: 'Home',
    //   // tslint:disable-next-line:max-line-length
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
    //   route: [
    //     {routerName: 'Digital', routerPath: 'digital'},
    //     {routerName: 'Colored', routerPath: 'colored/filter'},
    //     {routerName: 'Motorized', routerPath: 'motorized'},
    //     {routerName: 'Cash Box', routerPath: 'cashBox'},
    //     {routerName: 'Book Safe', routerPath: 'bookSafe'},
    //   ]
    // };
    // this.officeData = {
    //   id: 1,
    //   images: [
    //     'assets/images/Products/Safes3/safes/safes/Office%20safes/BN%20Series/img%20(40).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/Office%20safes/fingerprint%20Office%20safe/img%20(37).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/Office%20safes/key%20safe/img%20(27).jpeg',
    //   ],
    //   name: 'Office',
    //   // tslint:disable-next-line:max-line-length
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
    //   route: [
    //     {routerName: 'BN Series', routerPath: 'bN-Series'},
    //     {routerName: 'Fingerprint', routerPath: 'fingerprint'},
    //     {routerName: 'Key', routerPath: 'key'},
    //   ]
    // };
    // this.fireproofData = {
    //   id: 1,
    //   images: [
    //     'assets/images/Products/Safes3/safes/safes/fireproof%20safe/Chinese%20Fireproof/img%20(22).jpeg',
    //     'assets/images/Products/Safes3/safes/safes/fireproof%20safe/Korean%20Fireproof/Digital%20(Code%20Starts%20with%20ESD)/IMG_4066.PNG',
    //     'assets/images/Products/Safes3/safes/safes/fireproof%20safe/Vietnam%20Fireproof/Digital/2.jpg',
    //   ],
    //   name: 'Fireproof',
    //   // tslint:disable-next-line:max-line-length
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo quas rem velit veritatis. Accusamus amet, animi eligendi est facere iure nemo officia pariatur quibusdam recusandae reiciendis suscipit totam, voluptatem?',
    //   route: [
    //     {routerName: 'Chinese', routerPath: 'chinese'},
    //     {routerName: 'Korean', routerPath: 'korean/filter'},
    //     {routerName: 'Vietnam', routerPath: 'vietnam/filter'},
    //   ]
    // };
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Safes Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

  ngAfterViewInit(): void {
    isotopeProduct();
  }
}
