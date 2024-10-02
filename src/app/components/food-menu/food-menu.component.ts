import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
  foodList: string[] = [
    'Adobo',
    'Sinigang',
    'Lechon',
    'Kare-Kare',
    'Pancit',
    'Halo-Halo'
  ]; 
  foodName: string = '';

  
  addFood() {
    if (this.foodName) { 
      this.foodList.push(this.foodName);
      this.foodName = ''; 
    }
  }
}

