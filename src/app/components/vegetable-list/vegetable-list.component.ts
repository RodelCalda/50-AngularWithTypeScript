import { Component } from '@angular/core';
import { VegetableListService } from '../services/vegetable-list.service';
import { Vegetable } from '../../../interface/vegetable';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css'],
})
export class VegetableListComponent {
  newVegetable: Vegetable = { id: 0, name: '', color: '', price: 0 };
  vegetableList: Vegetable[] = [];

  constructor(private vegetableService: VegetableListService) {
    this.vegetableList = this.vegetableService.getVegetables(); 
  }

  addVegetable() {
    if (this.newVegetable.name.trim() && this.newVegetable.color.trim() && this.newVegetable.price > 0) {
      const newId = this.vegetableList.length ? this.vegetableList[this.vegetableList.length - 1].id + 1 : 1;
      const vegetableToAdd: Vegetable = { ...this.newVegetable, id: newId };

      this.vegetableService.addVegetable(vegetableToAdd);
      this.newVegetable = { id: 0, name: '', color: '', price: 0 }; 
      this.vegetableList = this.vegetableService.getVegetables(); 
    }
  }

  removeVegetable(id: number) {
    this.vegetableService.removeVegetable(id);
    this.vegetableList = this.vegetableService.getVegetables(); 
  }

  clearVegetables() {
    this.vegetableService.clearVegetables(); 
    this.vegetableList = this.vegetableService.getVegetables();
  }
}