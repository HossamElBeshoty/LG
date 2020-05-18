import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPages} from '../../Models/pages';
import {PageService} from '../../Services/page.service';
import {ISections} from '../../Models/sections';
import {environment} from '../../../environments/environment';
import {LangService} from '../../Services/lang.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {
  language: string = localStorage.getItem('language');
  aboutUsPage: IPages;
  aboutUsSection: ISections;
  imgApiPath = environment.imageEndPoint;
  lang: string;

  constructor(public pageService: PageService, private langService: LangService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.getAboutUsPage();
  }

  getAboutUsPage() {
    this.pageService.getPageDetails(2).subscribe(res => {
      this.aboutUsPage = res as IPages;
    }, error => {
    }, () => {
      this.aboutUsSection = this.aboutUsPage.sections.find(c => c.id === 6);
    });
  }
}
