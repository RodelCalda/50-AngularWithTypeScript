import { Injectable } from '@angular/core';
import { Vegetable } from '../../../interface/vegetable'; 

@Injectable({
  providedIn: 'root',
})
export class VegetableListService {
  private vegetables: Vegetable[] = [
    { id: 1, name: 'Carrot', color: 'Orange', price: 2.5 },
    { id: 2, name: 'Broccoli', color: 'Green', price: 1.8 },
    { id: 3, name: 'Tomato', color: 'Red', price: 3.0 },
    { id: 4, name: 'Spinach', color: 'Green', price: 1.5 },
    { id: 5, name: 'Potato', color: 'Brown', price: 0.8 },
    { id: 6, name: 'Bell Pepper', color: 'Red', price: 2.0 },
    { id: 7, name: 'Cucumber', color: 'Green', price: 1.2 },
    { id: 8, name: 'Eggplant', color: 'Purple', price: 2.3 },
    { id: 9, name: 'Onion', color: 'White', price: 1.0 },
    { id: 10, name: 'Garlic', color: 'White', price: 1.5 },
  ];

  getVegetables(): Vegetable[] {
    return this.vegetables;
  }

  addVegetable(vegetable: Vegetable): void {
    this.vegetables.push(vegetable);
  }

  removeVegetable(id: number): void {
    this.vegetables = this.vegetables.filter(vegetable => vegetable.id !== id);
  }

  clearVegetables(): void {
    this.vegetables = [];
  }
}
