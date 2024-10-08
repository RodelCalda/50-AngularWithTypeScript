import { Component } from '@angular/core';
import { AnimalListService } from '../services/animal-list.service';
import { Animal } from '../../../interface/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent {
  newAnimal: Animal = { id: 0, name: '', species: '', age: 0, habitat: '' };
  animalList: Animal[] = [];

  constructor(private animalService: AnimalListService) {
    this.animalList = this.animalService.getAnimals(); 
  }

  addAnimal() {
    if (this.newAnimal.name.trim() && this.newAnimal.species.trim() && this.newAnimal.age > 0 && this.newAnimal.habitat.trim()) {
      const newId = this.animalList.length ? this.animalList[this.animalList.length - 1].id + 1 : 1;
      const animalToAdd: Animal = { ...this.newAnimal, id: newId };

      this.animalService.addAnimal(animalToAdd);
      this.newAnimal = { id: 0, name: '', species: '', age: 0, habitat: '' };
      this.animalList = this.animalService.getAnimals();
    }
  }

  removeAnimal(id: number) {
    this.animalService.removeAnimal(id);
    this.animalList = this.animalService.getAnimals(); 
  }

  clearAnimals() {
    this.animalService.clearAnimals(); 
    this.animalList = this.animalService.getAnimals(); 
  }
}

