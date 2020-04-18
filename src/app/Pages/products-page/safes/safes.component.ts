import { Component, OnInit, AfterViewInit } from '@angular/core';
declare function isotopeProduct(): any;
@Component({
  selector: 'app-safes',
  templateUrl: './safes.component.html',
  styleUrls: ['./safes.component.css']
})
export class SafesComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    isotopeProduct();
  }
}
