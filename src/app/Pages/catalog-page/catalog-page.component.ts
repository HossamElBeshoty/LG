import {Component, OnInit} from '@angular/core';
// tslint:disable-next-line:import-spacing
import *  as  catalogData from '../../../assets/DataBase/catalog.json';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  catalogData = (catalogData as any).default as [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.catalogData);
  }

}
