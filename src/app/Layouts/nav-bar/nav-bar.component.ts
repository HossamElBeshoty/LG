import {Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {LangService} from '../../Services/lang.service';

declare function navfunction(): any;

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  language: string = localStorage.getItem('language');

  constructor(@Inject(DOCUMENT) private document, private translateService: TranslateService, private langService: LangService) {
  }

  ngOnInit(): void {
    localStorage.setItem('language', 'en');
  }

  ngAfterViewInit(): void {
    navfunction();

    $('li a').on('click', function(e) {
      $('#theMenu').toggleClass("open-responsive open-dropdown"); //you can list several class names
      e.preventDefault();
    });
  }

  changeLanguage(lang?: string) {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      const list = this.document.getElementsByClassName('tp-parallax-wrap');
      for (const item of list) {
        const right = item.style.left;
        item.style.right = right;
      }
      this.translateService.use('ar');
      localStorage.setItem('language', 'ar');
      this.language = 'ar';
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
      this.language = 'en';
    }
    this.langService.setLang(this.language);
  }
}
