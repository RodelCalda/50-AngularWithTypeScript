import { Injectable } from '@angular/core';
import { Accessory } from '../../../interface/accessory';

@Injectable({
  providedIn: 'root',
})
export class AccessoryListService {
  private accessories: Accessory[] = [
    { id: 1, name: 'Watch', category: 'Wearable', brand: 'Rolex', price: 500 },
    { id: 2, name: 'Sunglasses', category: 'Fashion', brand: 'Ray-Ban', price: 200 },
    { id: 3, name: 'Headphones', category: 'Electronics', brand: 'Sony', price: 150 }
  ];

  getAccessories(): Accessory[] {
    return this.accessories;
  }

  addAccessory(accessory: Accessory): void {
    this.accessories.push(accessory);
  }

  removeAccessory(id: number): void {
    this.accessories = this.accessories.filter(accessory => accessory.id !== id);
  }

  clearAccessories(): void {
    this.accessories = [];
  }
}

