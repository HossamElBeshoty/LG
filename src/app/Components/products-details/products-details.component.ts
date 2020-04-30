import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  digitalData from '../../../assets/DataBase/digitalData.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  data = (digitalData as any).default;
  pageName: string;
  digitalData: [];
  coloredData: [];
  motorizedData: [];
  cashBoxData: [];
  bookSafeData: [];
  categories: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pageName = params.name;
      console.log('Url Id: ', this.pageName);
    });
    this.getData();
  }

  getData() {
    // console.log(this.products.map(c => c.name));
    // switch (this.pageName) {
    //   case 'digital':
    //     this.digitalData = this.data.filter(c => c.pageName === this.pageName);
    //     console.log('It is a digital.', this.digitalData);
    //     break;
    //   case 'colored':
    //     this.coloredData = this.data.filter(c => c.pageName === this.pageName);
    //     console.log('It is a colored.');
    //     break;
    //   case 'motorized':
    //     console.log('It is a motorized.');
    //     break;
    //   case 'cashBox':
    //     console.log('It is a cashBox.');
    //     break;
    //   case 'bookSafe':
    //     console.log('It is a bookSafe.');
    //     break;
    //   default:
    //     console.log('No such day exists!');
    //     break;
    // }
    this.digitalData = this.data.filter(c => c.pageName === this.pageName);
    const allCategory: any = (this.digitalData.map((a: { category: [] }) => a.category));
    this.categories = [...new Set(allCategory.map(item => item.name))];
    console.log(this.categories);

  }


}
