import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import *  as  productsData from '../../../../../assets/DataBase/moneyCountingDetails.json';


@Component({
  selector: 'app-money-counting-details',
  templateUrl: './money-counting-details.component.html',
  styleUrls: ['./money-counting-details.component.css']
})
export class MoneyCountingDetailsComponent implements OnInit {
  productId: string;
  data = (productsData as any).default;
  productData: [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      console.log('Url Id: ', this.productId);
    });
    this.getProductById();
  }

  getProductById() {
    this.productData = this.data.filter(c => c.productId.toString() === this.productId);
    console.log(this.productData);
  }

}


