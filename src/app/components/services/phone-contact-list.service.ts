import { Injectable } from '@angular/core';
import { PhoneContact } from '../../../interface/phone-contact';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
  private contacts: PhoneContact[] = [
    { id: 1, name: 'John Doe', phoneNumber: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phoneNumber: '987-654-3210', email: 'jane@example.com' }
  ];

  getContacts(): PhoneContact[] {
    return this.contacts;
  }

  addContact(contact: PhoneContact): void {
    this.contacts.push(contact);
  }

  removeContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

  clearContacts(): void {
    this.contacts = [];
  }
}
