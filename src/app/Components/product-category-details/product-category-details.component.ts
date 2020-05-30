import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../Services/product.service";
import {IProducts} from "../../Models/products";
import {environment} from "../../../environments/environment";
import {IProductImages} from "../../Models/product-images";

@Component({
  selector: 'app-product-category-details',
  templateUrl: './product-category-details.component.html',
  styleUrls: ['./product-category-details.component.css']
})
export class ProductCategoryDetailsComponent implements OnInit {
  productID: number;
  products: IProducts[];
  imgApiPath = environment.imageEndPoint;

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productID = params.productID;
      console.log('Url Id: ', this.productID);
    });
    this.getAllCategoryDetailsProducts();
  }

  getAllCategoryDetailsProducts() {
    this.productService.getAllProducts(this.productID).subscribe(res => {
      this.products = res as IProducts[];
      console.log(this.products);
    });
  }

}
