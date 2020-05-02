import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// tslint:disable-next-line:import-spacing
import *  as  productsData from '../../../../../assets/DataBase/moneyCountingDetails.json';
import {MenuItem} from 'primeng/api';
import * as breadcrumb from '../../../../../assets/DataBase/billCountingBreadCrumb.json';


@Component({
  selector: 'app-money-counting-details',
  templateUrl: './money-counting-details.component.html',
  styleUrls: ['./money-counting-details.component.css']
})
export class MoneyCountingDetailsComponent implements OnInit {
  productId: string;
  data = (productsData as any).default;
  productData: [];
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  breadCrumbData = (breadcrumb as any).default;
  breadCrumbArray: any;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      console.log('Url Id: ', this.productId);
    });
    this.getProductById();
  }

  getProductById() {
    this.productData = this.data.filter(c => c.productId.toString() === this.productId);
    console.log(this.productData);
    // BreadCrumb
    this.breadCrumbArray = this.breadCrumbData.find(c => c.productId.toString() === this.productId);
    console.log(this.breadCrumbArray.breadCrumbName);
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Bill Counting Machine', routerLink: '/products/moneyCounting'},
      {label: this.breadCrumbArray.breadCrumbName, routerLink: '', styleClass: 'activeBreadCrumb'}
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

}


