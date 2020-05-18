import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService) { }
  getByCategoryId(categoryId:number)
  {
   return this.dataService.get(`product/getByCategoryId/${categoryId}`);
 }
}
