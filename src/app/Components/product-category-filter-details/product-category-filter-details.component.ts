import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../Services/category.service";
import {IFirstLevel} from "../../Models/first-level";
import {ProductService} from "../../Services/product.service";
import {LangService} from "../../Services/lang.service";
import {IProducts} from "../../Models/products";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-product-category-filter-details',
  templateUrl: './product-category-filter-details.component.html',
  styleUrls: ['./product-category-filter-details.component.css']
})
export class ProductCategoryFilterDetailsComponent implements OnInit {
  lang: string;
  productID: number;
  firstChild: IFirstLevel[];
  products: IProducts[];
  productIDDetails: [];
  imgApiPath = environment.imageEndPoint;
  preloader: boolean;
  constructor(private activatedRoute: ActivatedRoute, public categoryService: CategoryService, private langService: LangService, public productService: ProductService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.preloader = true;
    this.activatedRoute.params.subscribe(params => {
      this.productID = params.productID;
      console.log('Url Id: ', this.productID);
    });
    this.getFirstChildData();
  }

  getFirstChildData() {
    this.categoryService.getFirstChild(this.productID).subscribe(res => {
      this.firstChild = res as IFirstLevel[];
      this.productIDDetails = this.firstChild.map(c => c.data) as [];
      console.log(this.firstChild.filter(c => {
        return c.data
      }))
    }, error => {
    }, () => {
      for (let x of this.productIDDetails) {
        this.getAllCategoryDetailsProducts(x);
      }
      this.preloader = false;
    })
  }

  getAllCategoryDetailsProducts(id: number) {
    this.productService.getAllProducts(id).subscribe(res => {
      this.products = res as IProducts[];
      console.log(this.products);
    });
  }
}
