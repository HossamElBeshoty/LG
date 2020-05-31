import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../Models/products";
import {environment} from "../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../Services/product.service";
import {CategoryService} from "../../Services/category.service";
import {ICategoryTags} from "../../Models/category-tags";
import {LangService} from "../../Services/lang.service";

declare var $: any;

@Component({
  selector: 'app-product-filter-by-tag',
  templateUrl: './product-filter-by-tag.component.html',
  styleUrls: ['./product-filter-by-tag.component.css']
})
export class ProductFilterByTagComponent implements OnInit {
  lang: string;
  productID: number;
  products: IProducts[];
  imgApiPath = environment.imageEndPoint;
  tags: string;
  regex = new RegExp(',', 'g');
  categoryTags: ICategoryTags[];
  preloader: boolean;

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService, public categoryService: CategoryService, private langService: LangService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    $(function () {
      $('.tab-wrapper.v1 .item .tab-btn a').click(function (e) {
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
            .slideUp(400, function () {
              _item.removeClass('selected');
            });

        } else {
          _all.find('.tab-btn a em').removeClass('mdi-minus').addClass('mdi-plus')
            .closest('.item')
            .find('.tab-content')
            .stop()
            // tslint:disable-next-line:only-arrow-functions
            .slideUp(400, function () {
              _all.removeClass('selected');
            });

          _item.find('.tab-btn a em').removeClass('mdi-plus').addClass('mdi-minus')
            .closest('.item')
            .find('.tab-content')
            .stop()
            // tslint:disable-next-line:only-arrow-functions
            .slideDown(400, function () {
              _item.addClass('selected');
            });
        }
      });

      $('.tab-wrapper.v2 .tab-btn a').click(function (e) {
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

          _content.each(function () {
            // tslint:disable-next-line:variable-name
            const _value = $(this).data('value');

            $(this).removeClass(_hasClass).stop().hide();

            if (_value === _category) {
              $(this).stop()
                .fadeIn('slow', function () {
                  $(this).addClass(_hasClass);
                });
            }
          });
        }
      });
    });
    this.activatedRoute.params.subscribe(params => {
      this.productID = params.productID;
    });
    this.preloader = true;
    this.getAllCategoryDetailsProducts();
    this.getCategoryTag();
  }

  getAllCategoryDetailsProducts() {
    this.productService.getAllProducts(this.productID).subscribe((res: IProducts[]) => {
      this.products = res as IProducts[];
    }, error => {
    }, () => {
      const grid = $('.money-counting-item');
      $('.tab-content ul li').click(function () {
        $('.tab-content ul li').removeClass('activeIsotope');
        $(this).addClass('activeIsotope');
        const selector = $(this).attr('data-filter');
        grid.isotope({
          itemSelector: '.item',
          category: '[attr.data-filter]',
          layoutMode: 'fitRows',
          filter: selector
        });
        return false;
      });
      this.preloader = false;
    });
  }

  getCategoryTag() {
    this.categoryService.getCategoryTag(this.productID).subscribe(res => {
      this.categoryTags = res as ICategoryTags[];
    }, error => {
    }, () => {
    })
  }
}
