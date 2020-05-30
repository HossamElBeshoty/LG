import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-category-filter-details',
  templateUrl: './product-category-filter-details.component.html',
  styleUrls: ['./product-category-filter-details.component.css']
})
export class ProductCategoryFilterDetailsComponent implements OnInit {
  productID: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productID = params.productID;
      console.log('Url Id: ', this.productID);
    });
  }

}
