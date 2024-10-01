import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent {
  vegetableList: string[] = [
    'Carrot',
    'Tomato',
    'Potato',
    'Onion',
    'Broccoli',
    'Spinach',
    'Cauliflower',
    'Bell Pepper',
    'Cucumber',
  ]; 
  vegetableName: string = ''; 

  
  addVegetable() {
    if (this.vegetableName) {
      this.vegetableList.push(this.vegetableName);
      this.vegetableName = ''; 
    }
  }
}
