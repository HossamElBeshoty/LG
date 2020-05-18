import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {ICategory} from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category = {
    expandedIcon: 'pi pi-folder-open',
    data: 0,
    collapsedIcon: 'pi pi-folder'
  } as ICategory;

  constructor(private dataService: DataService) {
  }

  getTree() {
    return this.dataService.get('category');
  }

  addTree() {
    return this.dataService.post('category', this.category);
  }

  updateTree() {
    return this.dataService.update('category', this.category);
  }
}
