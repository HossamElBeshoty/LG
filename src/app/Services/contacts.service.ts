import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private dataService: DataService) {
  }

  getAllContacts() {
   return this.dataService.get('Contact');
  }
}
