import { Injectable } from '@angular/core';
import { Flower } from '../../../interface/flower'; 

@Injectable({
  providedIn: 'root',
})
export class FlowerListService {
  private flowers: Flower[] = [
    { id: 1, name: 'Rose', color: 'Red', price: 2.5, availability: true },
    { id: 2, name: 'Tulip', color: 'Yellow', price: 1.5, availability: true },
    { id: 3, name: 'Lily', color: 'White', price: 3, availability: false },
    
  ];

  getFlowers(): Flower[] {
    return this.flowers;
  }

  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  removeFlower(id: number): void {
    this.flowers = this.flowers.filter(flower => flower.id !== id);
  }

  clearFlowers(): void {
    this.flowers = [];
  }
}
