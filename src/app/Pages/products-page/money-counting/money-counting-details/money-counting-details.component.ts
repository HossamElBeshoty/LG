import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-money-counting-details',
  templateUrl: './money-counting-details.component.html',
  styleUrls: ['./money-counting-details.component.css']
})
export class MoneyCountingDetailsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: 'slide',
        controlNav: 'thumbnails',
        start: function(slider) {
          $('body').removeClass('loading');
        }
      });
    });
  }

}
