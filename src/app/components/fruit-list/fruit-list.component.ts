import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent {
  fruitList: string[] = []; 
  fruitName: string = '';   

  
  addFruit() {
    if (this.fruitName) { 
      this.fruitList.push(this.fruitName);
      this.fruitName = ''; 
    }
  }
}


