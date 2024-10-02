import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  animalList: string[] = [
    'Philippine Eagle',
    'Tamaraw',
    'Palawan Bearcat',
    'Crocodile',
    'Tiger',
    'Lion',
    'Asian Elephant',
    'Python',
    'Monitor Lizard',
    'Deer',
    'Peacock',
    'Macaw',
    'Ostrich',
    'Tortoise',
    'Monkey',
  ]; 
  animalName: string = ''; 

  
  addAnimal() {
    if (this.animalName) { 
      this.animalList.push(this.animalName);
      this.animalName = ''; 
    }
  }
}

