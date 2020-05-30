import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../Services/product.service";
import {ICategoryProducts} from "../../Models/category-products";
import {LangService} from "../../Services/lang.service";
import {MenuItem} from "primeng/api";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  lang: string;
  preloader: boolean;
  categoryID: number;
  categoryProduct: ICategoryProducts;
  breadCrumb: MenuItem[];
  homeBreadCrumb: MenuItem;
  imgApiPath = environment.imageEndPoint;

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService, private langService: LangService,) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoryID = params.categoryID;
      console.log('Url Id: ', this.categoryID);
    });
    this.preloader = true;
    this.getCategoryProducts();
  }

  getCategoryProducts() {
    this.productService.getAllCategoryProducts(this.categoryID).subscribe((res: { category: any }) => {
      this.categoryProduct = res.category as ICategoryProducts;
      // console.log(this.categoryProduct);
      console.log(this.categoryProduct.allChildren);
    }, error => {
    }, () => {
      this.breadCrumb = [
        {label: 'Products', routerLink: '/products'},
        {
          label: this.lang === 'en' ? this.categoryProduct.label : this.categoryProduct.nameAr,
          routerLink: '',
          styleClass: 'activeBreadCrumb'
        },
      ];
      this.homeBreadCrumb = {icon: 'pi pi-home', routerLink: '/'};
      this.preloader = false;
    });
  }
}
