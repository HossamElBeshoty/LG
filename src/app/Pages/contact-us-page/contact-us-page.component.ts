import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPages} from '../../Models/pages';
import {PageService} from '../../Services/page.service';
import {ISections} from '../../Models/sections';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  contactUsPage: IPages;
  contactUsSection: ISections;

  constructor(public pageService: PageService) {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Contact Us', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
    this.getContactUs();
  }

  getContactUs() {
    this.pageService.getPageDetails(3).subscribe(res => {
      this.contactUsPage = res as IPages;
    }, error => {
    }, () => {
      this.contactUsSection = this.contactUsPage.sections.find(c => c.id === 11);
    });
  }
}
