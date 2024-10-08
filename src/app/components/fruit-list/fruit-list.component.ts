// src/app/components/fruit-list/fruit-list.component.ts
import { Component } from '@angular/core';
import { FruitListService } from '../services/services/fruit-list.service'; 
import { Fruit } from '../../../interface/fruit'; 

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent {
  newFruit: Fruit = { id: 0, name: '', color: '', price: 0 };
  fruitList: Fruit[] = [];

  constructor(private fruitService: FruitListService) {
    this.fruitList = this.fruitService.getFruits(); 
  }

  addFruit() {
    if (this.newFruit.name.trim() && this.newFruit.color.trim() && this.newFruit.price > 0) {
      const newId = this.fruitList.length ? this.fruitList[this.fruitList.length - 1].id + 1 : 1;
      const fruitToAdd: Fruit = { ...this.newFruit, id: newId };
      
      this.fruitService.addFruit(fruitToAdd);
      this.newFruit = { id: 0, name: '', color: '', price: 0 }; 
      this.fruitList = this.fruitService.getFruits(); 
    }
  }

  removeFruit(id: number) {
    this.fruitService.removeFruit(id);
    this.fruitList = this.fruitService.getFruits();
  }

  clearFruits() {
    this.fruitService.clearFruits(); 
    this.fruitList = this.fruitService.getFruits(); 
  }
}



