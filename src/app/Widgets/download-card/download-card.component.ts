import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.css']
})
export class DownloadCardComponent implements OnInit {
  @Input() imagePath: string;
  @Input() catalogName: string;
  @Input() downloadPath: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
