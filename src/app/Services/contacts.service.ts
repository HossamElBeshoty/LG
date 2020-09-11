import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IContactEmail, IContactEmailFormData} from "../Models/contact-email";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactEmail = {} as IContactEmail;
  contactEmailFormData = {} as IContactEmailFormData;

  constructor(private dataService: DataService) {
  }

  getAllContacts() {
    return this.dataService.get('Contact');
  }

  postEmail() {
    return this.dataService.post('Contact/SendEmail', this.contactEmail);
  }
}
