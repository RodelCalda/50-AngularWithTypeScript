import { Injectable } from '@angular/core';
import { Laptop } from '../../../interface/laptop'; 

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptops: Laptop[] = [
    { id: 1, brand: 'Dell', model: 'XPS 13', processor: 'Intel i7', ramSize: '16GB', storage: '512GB SSD', price: 1500 },
    { id: 2, brand: 'Apple', model: 'MacBook Pro', processor: 'M1', ramSize: '16GB', storage: '1TB SSD', price: 2500 }
  ];

  getLaptops(): Laptop[] {
    return this.laptops;
  }

  addLaptop(laptop: Laptop): void {
    this.laptops.push(laptop);
  }

  removeLaptop(id: number): void {
    this.laptops = this.laptops.filter(laptop => laptop.id !== id);
  }

  clearLaptops(): void {
    this.laptops = [];
  }
}

