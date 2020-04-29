import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare function galleryfunction(): any;
declare function owlCarousel(rtl): any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document) {
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      galleryfunction();
      if (localStorage.getItem('language') === 'ar') {
        owlCarousel(true);
      } else {
        owlCarousel(false);
      }
    }, 0);




    // if (localStorage.getItem('language') === 'ar') {
    //   setTimeout(() => {
    //     const list = this.document.getElementsByClassName('tp-parallax-wrap');
    //     for (const item of list) {
    //       const right = item.style.left;
    //       console.log(right);
    //       item.style.right = right;
    //     }
    //   }, 500);
    //
    // }
  }
}
