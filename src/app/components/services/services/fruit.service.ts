import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruits: string[] = [];

  constructor() { }

 
  getFruits(): string[] {
    return this.fruits;
  }


  addFruit(fruit: string): void {
    if (fruit && !this.fruits.includes(fruit)) {
      this.fruits.push(fruit);
    }
  }

  removeFruit(fruit: string): void {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
