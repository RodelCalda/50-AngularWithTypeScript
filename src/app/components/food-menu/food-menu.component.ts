import { Component } from '@angular/core';
import { FoodMenuService } from '../services/food-menu.service';
import { FoodItem } from '../../../interface/food-item'; 

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
})
export class FoodMenuComponent {
  newFoodItem: FoodItem = { id: 0, name: '', category: '', price: 0, available: false };
  foodMenu: FoodItem[] = [];

  constructor(private foodMenuService: FoodMenuService) {
    this.foodMenu = this.foodMenuService.getFoodMenu(); 
  }

  addFoodItem() {
    if (this.newFoodItem.name.trim() && this.newFoodItem.category.trim() && this.newFoodItem.price > 0) {
      const newId = this.foodMenu.length ? this.foodMenu[this.foodMenu.length - 1].id + 1 : 1;
      const foodItemToAdd: FoodItem = { ...this.newFoodItem, id: newId };

      this.foodMenuService.addFoodItem(foodItemToAdd);
      this.newFoodItem = { id: 0, name: '', category: '', price: 0, available: false }; 
      this.foodMenu = this.foodMenuService.getFoodMenu(); 
    }
  }

  removeFoodItem(id: number) {
    this.foodMenuService.removeFoodItem(id);
    this.foodMenu = this.foodMenuService.getFoodMenu(); 
  }

  clearFoodMenu() {
    this.foodMenuService.clearFoodMenu(); // Clear the menu
    this.foodMenu = this.foodMenuService.getFoodMenu(); // Refresh menu
  }
}
