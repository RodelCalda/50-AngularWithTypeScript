import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent {
  accessoryList: string[] = [
    'Phone Case',
    'Screen Protector',
    'Charging Cable',
    'Wireless Charger',
    'Earbuds',
    'Power Bank',
    'Phone Stand',
    'Bluetooth Speaker',
    'Selfie Stick'
  ]; 

  accessoryName: string = '';

  
  addAccessory() {
    if (this.accessoryName) { 
      this.accessoryList.push(this.accessoryName);
      this.accessoryName = ''; 
    }
  }
}

