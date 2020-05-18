import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private dataService: DataService) {
  }

}
