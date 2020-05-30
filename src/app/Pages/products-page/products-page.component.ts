import {Component, OnInit} from '@angular/core';
import {LangService} from '../../Services/lang.service';
import {ProductService} from "../../Services/product.service";
import {IOurProducts} from "../../Models/our-products";
import {environment} from "../../../environments/environment";
import {Route, Router} from "@angular/router";

declare function owlCarousel(rtl): any;

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  lang: string;
  ourProducts: IOurProducts[];
  preloader: boolean;
  imgApiPath = environment.imageEndPoint;

  constructor(private langService: LangService, public productService: ProductService, public router: Router) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  getCategoryProducts() {
    this.productService.getOurProductPageCarousel().subscribe(res => {
        this.ourProducts = res as IOurProducts[]
        console.log(this.ourProducts)
      }, error => {
      }, () => {
        setTimeout(() => {
          if (localStorage.getItem('language') === 'ar') {
            owlCarousel(true);
          } else {
            owlCarousel(false);
          }
        }, 0);
        this.preloader = false;
      }
    )
  }
}
