import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LG-WebSite';

  constructor() {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
