import { Component } from '@angular/core';
import { FurnitureListService } from '../services/furniture-list.service';
import { Furniture } from '../../../interface/furniture';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css'],
})
export class FurnitureListComponent {
  newFurniture: Furniture = { id: 0, name: '', type: '', material: '', price: 0 };
  furnitureList: Furniture[] = [];

  constructor(private furnitureService: FurnitureListService) {
    this.furnitureList = this.furnitureService.getFurnitureList();
  }

  addFurniture() {
    if (
      this.newFurniture.name.trim() &&
      this.newFurniture.type.trim() &&
      this.newFurniture.material.trim() &&
      this.newFurniture.price > 0
    ) {
      const newId = this.furnitureList.length ? this.furnitureList[this.furnitureList.length - 1].id + 1 : 1;
      const furnitureToAdd: Furniture = { ...this.newFurniture, id: newId };

      this.furnitureService.addFurniture(furnitureToAdd);
      this.newFurniture = { id: 0, name: '', type: '', material: '', price: 0 }; 
      this.furnitureList = this.furnitureService.getFurnitureList(); 
    }
  }

  removeFurniture(id: number) {
    this.furnitureService.removeFurniture(id);
    this.furnitureList = this.furnitureService.getFurnitureList();
  }

  clearFurnitureList() {
    this.furnitureService.clearFurnitureList();
    this.furnitureList = this.furnitureService.getFurnitureList();
  }
}
