import { ICategoryTags } from './../Models/category-tags';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categoryTags = {
  } as ICategoryTags;
  constructor(private dataService: DataService) { }
  get() {
    return this.dataService.get('categoryTag');
  }

  add() {
    return this.dataService.post('categoryTag', this.categoryTags);
  }

  update() {
    return this.dataService.update('categoryTag', this.categoryTags);
  }
}
