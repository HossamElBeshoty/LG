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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pageName = params.name;
      console.log('Url Id: ', this.pageName);
    });
    this.getData();
  }

  getData() {
    this.digitalData = this.data.filter(c => c.pageName === this.pageName);
    const allCategory: any = (this.digitalData.map((a: { category: [] }) => a.category));
    this.categories = [...new Set(allCategory.map(item => item.name))];
    console.log(this.categories);
    // BreadCrumb
    this.breadCrumbArray = this.breadCrumbData.find(c => c.pageName === this.pageName);
    console.log(this.breadCrumbArray.breadCrumbName);
    if (this.router.url.includes('furniture')) {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {label: 'Furniture Products', routerLink: '/products/furniture'},
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
