import {Component, OnInit} from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  filterData from '../../../assets/DataBase/filterData.json';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-filter-details',
  templateUrl: './products-filter-details.component.html',
  styleUrls: ['./products-filter-details.component.css']
})
export class ProductsFilterDetailsComponent implements OnInit {
  data = (filterData as any).default;
  pageName: string;
  filterData: [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pageName = params.name;
      console.log('Url Id: ', this.pageName);
    });
    this.getFilterData();
  }

  getFilterData() {
    this.filterData = this.data.filter(c => c.pageName === this.pageName);
    console.log(this.filterData);
  }
}
