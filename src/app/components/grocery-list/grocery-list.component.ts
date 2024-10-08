import { Component } from '@angular/core';
import { GroceryListService } from '../services/grocery-list.service';
import { GroceryItem } from '../../../interface/grocery-item'; 

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent {
  newGroceryItem: GroceryItem = { id: 0, name: '', quantity: 0, purchased: false };
  groceryList: GroceryItem[] = [];

  constructor(private groceryListService: GroceryListService) {
    this.groceryList = this.groceryListService.getGroceryList(); 
  }

  addGroceryItem() {
    if (this.newGroceryItem.name.trim() && this.newGroceryItem.quantity > 0) {
      const newId = this.groceryList.length ? this.groceryList[this.groceryList.length - 1].id + 1 : 1;
      const groceryItemToAdd: GroceryItem = { ...this.newGroceryItem, id: newId };

      this.groceryListService.addGroceryItem(groceryItemToAdd);
      this.newGroceryItem = { id: 0, name: '', quantity: 0, purchased: false }; 
      this.groceryList = this.groceryListService.getGroceryList();
    }
  }

  removeGroceryItem(id: number) {
    this.groceryListService.removeGroceryItem(id);
    this.groceryList = this.groceryListService.getGroceryList(); 
  }

  clearGroceryList() {
    this.groceryListService.clearGroceryList(); 
    this.groceryList = this.groceryListService.getGroceryList(); 
  }
}


