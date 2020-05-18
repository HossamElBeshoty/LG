import {Injectable} from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class SectionMediaService {

  constructor(private dataService: DataService) {
  }


  deleteSectionMedia(id: number) {
    return this.dataService.delete('SectionMedia/', id);
  }
}
