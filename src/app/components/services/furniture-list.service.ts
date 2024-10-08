import { Injectable } from '@angular/core';
import { Furniture } from '../../../interface/furniture';

@Injectable({
  providedIn: 'root',
})
export class FurnitureListService {
  private furnitureList: Furniture[] = [
    { id: 1, name: 'Sofa', type: 'Living Room', material: 'Leather', price: 500 },
    { id: 2, name: 'Dining Table', type: 'Dining Room', material: 'Wood', price: 300 },
    { id: 3, name: 'Bed', type: 'Bedroom', material: 'Metal', price: 450 }
  ];

  getFurnitureList(): Furniture[] {
    return this.furnitureList;
  }

  addFurniture(furniture: Furniture): void {
    this.furnitureList.push(furniture);
  }

  removeFurniture(id: number): void {
    this.furnitureList = this.furnitureList.filter(furniture => furniture.id !== id);
  }

  clearFurnitureList(): void {
    this.furnitureList = [];
  }
}

