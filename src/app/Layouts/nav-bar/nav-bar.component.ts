import { Component, OnInit, AfterViewInit } from '@angular/core';
declare function navfunction(): any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    navfunction();
  }
}
