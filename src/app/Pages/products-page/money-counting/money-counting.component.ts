import {AfterViewInit, Component, OnInit} from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  data from '../../../../assets/DataBase/moneyCounting.json';
import {MenuItem} from 'primeng/api';

declare var $: any;

declare function isotopeProduct(): any;

@Component({
  selector: 'app-money-counting',
  templateUrl: './money-counting.component.html',
  styleUrls: ['./money-counting.component.css']
})
export class MoneyCountingComponent implements OnInit, AfterViewInit {
  products = (data as any).default;
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumb = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Bill Counting Machine', routerLink: '', styleClass: 'activeBreadCrumb'},
    ];
    this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
    console.log(this.products);
    // tslint:disable-next-line:only-arrow-functions
    $(function() {
      $('.tab-wrapper.v1 .item .tab-btn a').click(function(e) {
        e.preventDefault();
        // tslint:disable-next-line:variable-name
        const _item = $(this).closest('.item');
        // tslint:disable-next-line:variable-name
        const _hasClass = 'selected';
        // tslint:disable-next-line:variable-name
        const _all = $('.tab-wrapper.v1 .item');

        if (_item.hasClass(_hasClass)) {
          _item.find('.tab-btn a em').removeClass('mdi-minus').addClass('mdi-plus')
            .closest('.item')
            .find('.tab-content')
            .stop()
            // tslint:disable-next-line:only-arrow-functions
            .slideUp(400, function() {
              _item.removeClass('selected');
            });

        } else {
          _all.find('.tab-btn a em').removeClass('mdi-minus').addClass('mdi-plus')
            .closest('.item')
            .find('.tab-content')
            .stop()
            // tslint:disable-next-line:only-arrow-functions
            .slideUp(400, function() {
              _all.removeClass('selected');
            });

          _item.find('.tab-btn a em').removeClass('mdi-plus').addClass('mdi-minus')
            .closest('.item')
            .find('.tab-content')
            .stop()
            // tslint:disable-next-line:only-arrow-functions
            .slideDown(400, function() {
              _item.addClass('selected');
            });
        }
      });

      $('.tab-wrapper.v2 .tab-btn a').click(function(e) {
        e.preventDefault();

        // tslint:disable-next-line:variable-name
        const _this = $(this);
        // tslint:disable-next-line:variable-name
        const _hasClass = 'selected';
        // tslint:disable-next-line:variable-name
        const _category = _this.data('category');
        // tslint:disable-next-line:variable-name
        const _content = $('.tab-wrapper.v2 .tab-content .item');
        // tslint:disable-next-line:variable-name
        const _all = $('.tab-wrapper.v2 .tab-btn a');

        if (_this.hasClass(_hasClass)) {

        } else {
          _all.removeClass(_hasClass).find('em').removeClass('mdi-minus').addClass('mdi-plus');
          _this.addClass(_hasClass).find('em').removeClass('mdi-plus').addClass('mdi-minus');

          _content.each(function() {
            // tslint:disable-next-line:variable-name
            const _value = $(this).data('value');

            $(this).removeClass(_hasClass).stop().hide();

            if (_value === _category) {
              $(this).stop()
                .fadeIn('slow', function() {
                  $(this).addClass(_hasClass);
                });
            }
          });
        }
      });
    });

  }

  ngAfterViewInit(): void {
    // const grid = $('.money-counting-item');
    // if (grid.length) {
    //   grid.isotope({
    //     itemSelector: '.item'
    //   });
    //   $('.tab-content ul li').click(function() {
    //     $('.tab-content ul li').removeClass('activeIsotope');
    //     $(this).addClass('activeIsotope');
    //     const selector = $(this).attr('data-filter');
    //     grid.isotope({
    //       filter: selector
    //     });
    //     return false;
    //   });
    // }
    isotopeProduct();
  }
}
