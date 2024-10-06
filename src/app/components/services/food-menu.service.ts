import { Injectable } from '@angular/core';
import { FoodItem } from '../../../interface/food-item';
@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private foodMenu: FoodItem[] = [
    { id: 1, name: 'Burger', category: 'Fast Food', price: 5.99, available: true },
    { id: 2, name: 'Pizza', category: 'Fast Food', price: 9.99, available: true },
    { id: 3, name: 'Pasta', category: 'Italian', price: 7.49, available: false },
  ];

  getFoodMenu(): FoodItem[] {
    return this.foodMenu;
  }

  addFoodItem(foodItem: FoodItem): void {
    this.foodMenu.push(foodItem);
  }

  removeFoodItem(id: number): void {
    this.foodMenu = this.foodMenu.filter((item) => item.id !== id);
  }

  clearFoodMenu(): void {
    this.foodMenu = [];
  }
}