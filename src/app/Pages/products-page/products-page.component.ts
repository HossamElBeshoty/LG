import { Component, OnInit, AfterViewInit } from '@angular/core';
declare function owlCarousel(): any;
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    owlCarousel();
  }

}
