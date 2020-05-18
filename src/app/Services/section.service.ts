import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {ISections} from "../Models/sections";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  section = {sectionMedia: []} as ISections;

  constructor(private dataService: DataService) {
  }

  getSectionByID(id: number) {
    return this.dataService.get('Section/' + id)
  }

  editSection() {
    return this.dataService.update('Section/', this.section)
  }
}
