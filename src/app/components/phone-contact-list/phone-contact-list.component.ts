import { Component } from '@angular/core';
import { PhoneContactListService } from '../services/phone-contact-list.service'; 
import { PhoneContact } from '../../../interface/phone-contact';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrls: ['./phone-contact-list.component.css']
})
export class PhoneContactListComponent {
  newContact: PhoneContact = { id: 0, name: '', phoneNumber: '', email: '' };
  contactList: PhoneContact[] = [];

  constructor(private contactService: PhoneContactListService) {
    this.contactList = this.contactService.getContacts();
  }

  addContact() {
    if (this.newContact.name.trim() && this.newContact.phoneNumber.trim() && this.newContact.email.trim()) {
      const newId = this.contactList.length ? this.contactList[this.contactList.length - 1].id + 1 : 1;
      const contactToAdd: PhoneContact = { ...this.newContact, id: newId };

      this.contactService.addContact(contactToAdd);
      this.newContact = { id: 0, name: '', phoneNumber: '', email: '' }; 
      this.contactList = this.contactService.getContacts(); 
    }
  }

  removeContact(id: number) {
    this.contactService.removeContact(id);
    this.contactList = this.contactService.getContacts(); 
  }

  clearContacts() {
    this.contactService.clearContacts(); 
    this.contactList = this.contactService.getContacts(); 
  }
}
