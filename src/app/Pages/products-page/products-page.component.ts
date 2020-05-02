import {Component, OnInit, AfterViewInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

declare function owlCarousel(): any;

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, AfterViewInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

  ngAfterViewInit(): void {
    owlCarousel();
  }
}
