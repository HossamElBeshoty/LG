import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPages} from '../../Models/pages';
import {PageService} from '../../Services/page.service';
import {ISections} from '../../Models/sections';
import {LangService} from '../../Services/lang.service';
import {IContact} from "../../Models/contact";
import {ContactsService} from "../../Services/contacts.service";

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

  constructor(public pageService: PageService, private langService: LangService, public contactService: ContactsService) {
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
}
