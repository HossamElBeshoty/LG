import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    $(window).on('load', function() {
      $('.preloader').addClass('complete');
      $('.preloader').css('z-index', '0');
    });
  }

}
