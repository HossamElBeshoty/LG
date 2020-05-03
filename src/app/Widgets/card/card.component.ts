import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() collectionName: string;
  @Input() size: string;
  @Input() weight: string;
  @Input() quantity: string;
  @Input() nwGw: string;
  @Input() imageRatio: number;
  constructor() { }
  ngOnInit(): void {
  }
}
