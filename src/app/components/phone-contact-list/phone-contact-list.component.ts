import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrls: ['./phone-contact-list.component.css']
})
export class PhoneContactListComponent {
  contactList: { name: string, number: string }[] = [
    { name: 'Juan Dela Cruz', number: '0917 123 4567' },
    { name: 'Maria Santos', number: '0928 987 6543' },
    { name: 'Jose Rizal', number: '0998 555 1212' },
    { name: 'Liza Manoban', number: '0918 321 7654' },
    { name: 'Andres Bonifacio', number: '0921 456 7890' },
    { name: 'Emilio Aguinaldo', number: '0916 543 2109' }
  ]; 

  contactName: string = '';
  contactNumber: string = '';

 
  addContact() {
    if (this.contactName && this.contactNumber) { 
      this.contactList.push({ name: this.contactName, number: this.contactNumber });
      this.contactName = ''; 
      this.contactNumber = '';
    }
  }
}

