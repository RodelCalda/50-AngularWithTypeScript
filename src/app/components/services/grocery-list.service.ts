import { Injectable } from '@angular/core';
import { GroceryItem } from '../../../interface/grocery-item'; 

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private groceryList: GroceryItem[] = [
    { id: 1, name: 'Milk', quantity: 2, purchased: false },
    { id: 2, name: 'Bread', quantity: 1, purchased: true },
  ];

  getGroceryList(): GroceryItem[] {
    return this.groceryList;
  }

  addGroceryItem(groceryItem: GroceryItem): void {
    this.groceryList.push(groceryItem);
  }

  removeGroceryItem(id: number): void {
    this.groceryList = this.groceryList.filter((item) => item.id !== id);
  }

  clearGroceryList(): void {
    this.groceryList = [];
  }
}