import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private dataService: DataService) {
  }

  getPageDetails(id: number) {
    return this.dataService.get('Page/' + id);
  }
}
