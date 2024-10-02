import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent {
  furnitureList: string[] = [
    'Sofa',
    'Dining Table',
    'Bed',
    'Chair',
    'Bookshelf',
    'Coffee Table',
    'Desk',
    'Dresser',
    'Nightstand'
  ]; 
  furnitureName: string = '';

 
  addFurniture() {
    if (this.furnitureName) { 
      this.furnitureList.push(this.furnitureName);
      this.furnitureName = ''; 
    }
  }
}

