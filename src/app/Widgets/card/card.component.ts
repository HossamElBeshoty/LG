import {Component, Input, OnInit} from '@angular/core';
import {LangService} from "../../Services/lang.service";

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
