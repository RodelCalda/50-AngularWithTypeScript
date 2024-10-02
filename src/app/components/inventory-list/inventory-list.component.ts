import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  inventoryList: string[] = [
    'Laptops',
    'Smartphones',
    'Tablets',
    'Printers',
    'Cameras',
    'Headphones'
  ]; 
  itemName: string = '';

  
  addItem() {
    if (this.itemName) { 
      this.inventoryList.push(this.itemName);
      this.itemName = ''; 
    }
  }
}

