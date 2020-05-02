import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-furniture-page',
  templateUrl: './furniture-page.component.html',
  styleUrls: ['./furniture-page.component.css']
})
export class FurniturePageComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Furniture Products', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }

}
