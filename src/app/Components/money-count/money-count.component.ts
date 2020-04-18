import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-money-count',
  templateUrl: './money-count.component.html',
  styleUrls: ['./money-count.component.css']
})
export class MoneyCountComponent implements OnInit {
  @Input() header: string;
  constructor() {
  }
  ngOnInit(): void {
  }
}
