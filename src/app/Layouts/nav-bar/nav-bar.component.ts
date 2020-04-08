import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
declare function navfunction(): any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  language: string = localStorage.getItem('language');

  constructor(@Inject(DOCUMENT) private document, private translateService: TranslateService) { }

  ngOnInit(): void {
    localStorage.setItem('language', 'en');
  }
  ngAfterViewInit(): void {
    navfunction();
  }
  changeLanguage(lang?: string) {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.translateService.use('ar');
      localStorage.setItem('language', 'ar');
      this.language = 'ar';
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
      this.language = 'en';
    }
  }
}
