import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  groceryList: string[] = [
    'Rice',
    'Eggs',
    'Milk',
    'Bread',
    'Fruits',
    'Vegetables'
  ]; 
  groceryItem: string = '';

  addGrocery() {
    if (this.groceryItem) { 
      this.groceryList.push(this.groceryItem);
      this.groceryItem = ''; 
    }
  }
}

