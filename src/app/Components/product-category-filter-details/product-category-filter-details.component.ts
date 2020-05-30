import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../Services/category.service";
import {IFirstLevel} from "../../Models/first-level";
import {ProductService} from "../../Services/product.service";
import {LangService} from "../../Services/lang.service";
import {IProducts} from "../../Models/products";

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

  constructor(private activatedRoute: ActivatedRoute, public categoryService: CategoryService, private langService: LangService, public productService: ProductService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productID = params.productID;
      console.log('Url Id: ', this.productID);
    });
    this.getFirstChildData();
  }

  getFirstChildData() {
    this.categoryService.getFirstChild(this.productID).subscribe(res => {
      this.firstChild = res as IFirstLevel[];
      console.log(this.firstChild.map(c => c.data))
    }, error => {
    }, () => {
      // this.getAllCategoryDetailsProducts();
    })
  }

  getAllCategoryDetailsProducts() {
    this.productService.getAllProducts(this.productID).subscribe(res => {
      this.products = res as IProducts[];
      console.log(this.products);
    });
  }
}
