import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../Services/product.service";
import {IProducts} from "../../Models/products";
import {environment} from "../../../environments/environment";
import {PageService} from "../../Services/page.service";
import {LangService} from "../../Services/lang.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  lang: string;
  productID: number;
  product: IProducts;
  imgApiPath = environment.imageEndPoint;

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService, private langService: LangService) {
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
    });
    this.getProduct();
  }

  getProduct() {
    this.productService.getSingleProduct(this.productID).subscribe(res => {
      this.product = res as IProducts;
    })
  }

}
