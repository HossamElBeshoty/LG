import {Component, Input, OnInit} from '@angular/core';
import {LangService} from "../../Services/lang.service";

@Component({
  selector: 'app-money-counting-card',
  templateUrl: './money-counting-card.component.html',
  styleUrls: ['./money-counting-card.component.css']
})
export class MoneyCountingCardComponent implements OnInit {
  @Input() imagePath: string;
  @Input() codeName: string;
  @Input() productCategory: string;
  @Input() dimensions: string;
  @Input() feature: string;
  @Input() specificationName: string;
  @Input() specificationDetails: string;
  @Input() route: string;
  lang: string;

  constructor(private langService: LangService) {
    this.langService.getLang().subscribe(res => {
      this.lang = res as string;
      if (this.lang === null) {
        this.lang = 'en';
      }
    });
  }

  ngOnInit(): void {
  }

}
