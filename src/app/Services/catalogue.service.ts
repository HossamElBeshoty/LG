import {Injectable} from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private dataService: DataService) {
  }

  getAllCatalogues() {
    return this.dataService.get('Catalog');
  }
}
