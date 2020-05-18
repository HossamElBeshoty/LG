import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPages} from '../../Models/pages';
import {PageService} from '../../Services/page.service';
import {ISections} from '../../Models/sections';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {
  language: string = localStorage.getItem('language');
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  aboutUsPage: IPages;
  aboutUsSection: ISections;
  imgApiPath = environment.imageEndPoint;
  constructor( public pageService: PageService) {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'About Us', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
    this.getAboutUsPage();
  }

  getAboutUsPage() {
    this.pageService.getPageDetails(2).subscribe(res => {
      this.aboutUsPage = res as IPages;
    }, error => {
    }, () => {
      this.aboutUsSection = this.aboutUsPage.sections.find(c => c.id === 6);
      console.log(this.aboutUsSection);
    });
  }
}
