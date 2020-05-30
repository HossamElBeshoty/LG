import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IProducts} from "../Models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService) {
  }

  getHomePageTrendingItems() {
    return this.dataService.get('Product/GetIsHomePage');
  }

  getOurProductPageCarousel() {
    return this.dataService.get('/Product/GetOurProduct');
  }

  getAllCategoryProducts(id: number) {
    return this.dataService.get('/Product/GetOurCategory/' + id);
  }

  getAllProducts(id: number) {
    return this.dataService.get('Product/GetByCategoryId/' + id)
  }
}
