import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent implements OnInit {
  @Input() productCode: string;
  @Input() productCategory: string;
  @Input() imgPath: string;
  @Input() route: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
