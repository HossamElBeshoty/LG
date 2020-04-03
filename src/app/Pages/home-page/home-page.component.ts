import { Component, OnInit, AfterViewInit } from '@angular/core';
declare function galleryfunction(): any;
declare function owlCarousel(): any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    galleryfunction();
    owlCarousel();
  }
}
