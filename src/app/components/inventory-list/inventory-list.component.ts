import { Component } from '@angular/core';
import { InventoryListService } from '../services/inventory-list.service';
import { Inventory } from '../../../interface/inventory'; 

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent {
  newInventoryItem: Inventory = { id: 0, name: '', quantity: 0, price: 0 };
  inventoryList: Inventory[] = [];

  constructor(private inventoryService: InventoryListService) {
    this.inventoryList = this.inventoryService.getInventory();
  }

  addInventoryItem() {
    if (
      this.newInventoryItem.name.trim() &&
      this.newInventoryItem.quantity > 0 &&
      this.newInventoryItem.price > 0
    ) {
      const newId = this.inventoryList.length
        ? this.inventoryList[this.inventoryList.length - 1].id + 1
        : 1;
      const itemToAdd: Inventory = { ...this.newInventoryItem, id: newId };

      this.inventoryService.addInventoryItem(itemToAdd);
      this.newInventoryItem = { id: 0, name: '', quantity: 0, price: 0 }; 
      this.inventoryList = this.inventoryService.getInventory(); 
    }
  }

  removeInventoryItem(id: number) {
    this.inventoryService.removeInventoryItem(id);
    this.inventoryList = this.inventoryService.getInventory(); 
  }

  clearInventory() {
    this.inventoryService.clearInventory(); 
    this.inventoryList = this.inventoryService.getInventory(); 
  }
}

