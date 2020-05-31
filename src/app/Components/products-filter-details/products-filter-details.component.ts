import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  filterData from '../../../assets/DataBase/filterData.json';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import * as breadcrumb from '../../../assets/DataBase/breadcrumb.json';

@Component({
  selector: 'app-products-filter-details',
  templateUrl: './products-filter-details.component.html',
  styleUrls: ['./products-filter-details.component.css']
})
export class ProductsFilterDetailsComponent implements OnInit {
  data = (filterData as any).default;
  pageName: string;
  filterData: [];
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  breadCrumbData = (breadcrumb as any).default;
  breadCrumbArray: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pageName = params.name;
    });
    this.getFilterData();
  }

  getFilterData() {
    this.filterData = this.data.filter(c => c.pageName === this.pageName);
    this.filterData.sort((c: any) => c.details.sort((a: any, b: any) => a.id - b.id));
    // BreadCrumb
    this.breadCrumbArray = this.breadCrumbData.find(c => c.pageName === this.pageName);
    console.log(this.breadCrumbArray.breadCrumbName);
    this.breadCrumb = [
      { label: 'Products', routerLink: '/products' },
      { label: 'Safes Products', routerLink: '/products/safes' },
      { label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb' }
    ];
    this.homeBreadCrumb = { icon: 'pi pi-home', routerLink: '/' };
  }
}
