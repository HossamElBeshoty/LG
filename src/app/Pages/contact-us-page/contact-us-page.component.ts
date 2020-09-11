import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPages} from '../../Models/pages';
import {PageService} from '../../Services/page.service';
import {ISections} from '../../Models/sections';
import {LangService} from '../../Services/lang.service';
import {IContact} from "../../Models/contact";
import {ContactsService} from "../../Services/contacts.service";
import {IContactEmail, IContactEmailFormData} from "../../Models/contact-email";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {
  contactUsPage: IPages;
  contactUsSection: ISections;
  lang: string;
  contactList: IContact[];

  constructor(public pageService: PageService, private langService: LangService, public contactService: ContactsService, private snackBar: MatSnackBar) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.getContactUs();
    this.getAllContact();
  }

  getContactUs() {
    this.pageService.getPageDetails(3).subscribe(res => {
      this.contactUsPage = res as IPages;
    }, error => {
    }, () => {
      this.contactUsSection = this.contactUsPage.sections.find(c => c.id === 11);
    });
  }

  getAllContact() {
    this.contactService.getAllContacts().subscribe(res => {
      this.contactList = res as IContact[];
    });
  }

  onSubmit() {
    this.contactService.contactEmail.subject = 'Email From Lotfy Group WebSite Contact Us';
    this.contactService.contactEmail.body = `
    <h4 style="color: #ed1b24; font-weight: bold;">Message From Client: <span style="color: #17469e">${this.contactService.contactEmailFormData.userName}</span></h4>
    <h4 style="color: #ed1b24; font-weight: bold;">Email: <span style="color: #17469e">${this.contactService.contactEmailFormData.email}</span></h4>
    <h4 style="color: #ed1b24; font-weight: bold;">Mobile Phone: <span style="color: #17469e">${this.contactService.contactEmailFormData.phone}</span></h4>
    <h4 style="color: #ed1b24; font-weight: bold;">Message: <span style="color: #17469e">${this.contactService.contactEmailFormData.comment}</span></h4>
    `;
    this.contactService.postEmail().subscribe(res => {
      console.log(res)
    }, error => {
    }, () => {
      this.contactService.contactEmail = {} as IContactEmail;
      this.contactService.contactEmailFormData = {} as IContactEmailFormData;
      this.snackBar.open('Thanks For Contacting Us', 'Contact Us', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    })
  }
}
