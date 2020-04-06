import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
declare function navfunction(): any;
@Component({
  selector: 'app-nav-bar-rtl',
  templateUrl: './nav-bar-rtl.component.html',
  styleUrls: ['./nav-bar-rtl.component.css']
})
export class NavBarRtlComponent implements OnInit, AfterViewInit {
  language: string;

  constructor(@Inject(DOCUMENT) private document, private translateService: TranslateService) { }

  ngOnInit(): void {
    // localStorage.setItem('language', 'en');
  }
  ngAfterViewInit(): void {
    navfunction();
  }
  changeLanguage(lang?: string) {
    if (lang === 'ar') {
      this.document.getElementById('direction').setAttribute('dir', 'rtl');
      this.translateService.use('ar');
      localStorage.setItem('language', 'ar');
      this.language = 'ar';
    } else {
      this.document.getElementById('direction').setAttribute('dir', 'ltr');
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
      this.language = 'en';
    }
  }
}
