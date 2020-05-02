import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {
  language: string = localStorage.getItem('language');
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'About Us', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
  }
}
