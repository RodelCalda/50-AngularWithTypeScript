// src/app/services/fruit-list.service.ts
import { Injectable } from '@angular/core';
import { Fruit } from '../../../../interface/fruit'; 

@Injectable({
  providedIn: 'root',
})
export class FruitListService {
  private fruits: Fruit[] = [
    { id: 1, name: 'Apple', color: 'Red', price: 1.5 },
    { id: 2, name: 'Banana', color: 'Yellow', price: 0.5 },
    { id: 3, name: 'Grapes', color: 'Purple', price: 2.0 },
  ];

  getFruits(): Fruit[] {
    return this.fruits;
  }

  addFruit(fruit: Fruit): void {
    this.fruits.push(fruit);
  }

  removeFruit(id: number): void {
    this.fruits = this.fruits.filter(fruit => fruit.id !== id);
  }

  clearFruits(): void {
    this.fruits = [];
  }
}
