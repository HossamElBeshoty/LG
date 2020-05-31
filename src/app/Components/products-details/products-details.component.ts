import {Component, OnInit} from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  digitalData from '../../../assets/DataBase/digitalData.json';
// tslint:disable-next-line:import-spacing
import *  as  breadcrumb from '../../../assets/DataBase/breadcrumb.json';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  breadCrumbData = (breadcrumb as any).default;
  breadCrumbArray: any;
  data = (digitalData as any).default;
  pageName: string;
  digitalData: [];
  categories: any;
  public filterData: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pageName = params.name;
    });
    this.getData();
  }

  getData() {
    this.digitalData = this.data.filter(c => c.pageName === this.pageName);
    this.digitalData.sort((a: any, b: any) => a.id - b.id);
    const allCategory: any = (this.digitalData.map((a: { category: [] }) => a.category));
    this.categories = [...new Set(allCategory.map(item => item.id))];

    // BreadCrumb
    this.breadCrumbArray = this.breadCrumbData.find(c => c.pageName === this.pageName);
    if (this.router.url.includes('furniture')) {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {label: 'Furniture Products', routerLink: '/products/furniture'},
        {label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb'}
      ];
    } else if (this.router.url.includes('lighting')) {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {label: 'Lighting Products', routerLink: '/products/lighting'},
        {label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb'}
      ];
    } else if (this.router.url.includes('gallery')) {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {label: 'Gallery Products', routerLink: '/products/gallery'},
        {label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb'}
      ];
    } else {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {label: 'Safes Products', routerLink: '/products/safes'},
        {label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb'}
      ];
    }

    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }


}
