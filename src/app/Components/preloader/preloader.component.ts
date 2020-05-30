import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit , OnChanges{
  @Input() loader: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.loader == false) {
      $('.preloader').addClass('complete');
      $('.preloader').css('z-index', '0');
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    console.log(this.loader)
    if (this.loader == false) {
      $('.preloader').addClass('complete');
      $('.preloader').css('z-index', '0');
    }
    $(window).on('load', function() {
      $('.preloader').addClass('complete');
      $('.preloader').css('z-index', '0');
    });
  }

}
