import {Component, OnInit} from '@angular/core';
// @ts-ignore
// tslint:disable-next-line:import-spacing
import *  as  data from '../../../../assets/DataBase/data.json';

@Component({
  selector: 'app-money-counting',
  templateUrl: './money-counting.component.html',
  styleUrls: ['./money-counting.component.css']
})
export class MoneyCountingComponent implements OnInit {
  products = (data as any).default;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.products.map(c => c.name));
  }

}
