import { Injectable } from '@angular/core';
import { Inventory } from '../../../interface/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryListService {
  private inventory: Inventory[] = [
    { id: 1, name: 'Laptop', quantity: 10, price: 1200 },
    { id: 2, name: 'Smartphone', quantity: 25, price: 800 },
  ];

  getInventory(): Inventory[] {
    return this.inventory;
  }

  addInventoryItem(item: Inventory): void {
    this.inventory.push(item);
  }

  removeInventoryItem(id: number): void {
    this.inventory = this.inventory.filter((item) => item.id !== id);
  }

  clearInventory(): void {
    this.inventory = [];
  }
}
