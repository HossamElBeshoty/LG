import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../Services/category.service';
import {LangService} from '../../Services/lang.service';
import {ICategory} from '../../Models/category';

declare function owlCarousel(rtl): any;

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  lang: string;
  categories: ICategory[];

  constructor(private langService: LangService, public categoryService: CategoryService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getProductPageCategoryCategories().subscribe(res => {
      this.categories = res as ICategory[];
    }, error => {
    }, () => {
      setTimeout(() => {
        if (localStorage.getItem('language') === 'ar') {
          owlCarousel(true);
        } else {
          owlCarousel(false);
        }
      }, 0);
    });
  }
}
