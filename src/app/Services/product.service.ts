import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService) {
  }

  getHomePageTrendingItems() {
    return this.dataService.get('Product/GetIsHomePage');
  }
}
