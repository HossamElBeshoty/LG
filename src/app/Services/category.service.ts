import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private dataService: DataService) {
  }

  getProductPageCategoryCategories() {
    return this.dataService.get('Category');
  }

  getFirstChild(id: number) {
    return this.dataService.get('Category/GetFirstLevel/' + id)
  }
}
