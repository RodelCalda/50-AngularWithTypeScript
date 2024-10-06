import { Injectable } from '@angular/core';
import { Animal } from '../../../interface/animal'; 

@Injectable({
  providedIn: 'root',
})
export class AnimalListService {
  private animals: Animal[] = [
    { id: 1, name: 'Lion', species: 'Panthera leo', age: 8, habitat: 'Savannah' },
    { id: 2, name: 'Elephant', species: 'Loxodonta', age: 15, habitat: 'Grassland' },
    { id: 3, name: 'Penguin', species: 'Spheniscidae', age: 5, habitat: 'Antarctica' },
    { id: 4, name: 'Dolphin', species: 'Delphinidae', age: 12, habitat: 'Ocean' },
    { id: 5, name: 'Eagle', species: 'Aquila', age: 3, habitat: 'Mountains' },
    { id: 6, name: 'Giraffe', species: 'Giraffa camelopardalis', age: 10, habitat: 'Savannah' },
    { id: 7, name: 'Kangaroo', species: 'Macropus', age: 6, habitat: 'Grassland' },
    { id: 8, name: 'Shark', species: 'Selachimorpha', age: 20, habitat: 'Ocean' },
    { id: 9, name: 'Frog', species: 'Anura', age: 2, habitat: 'Wetlands' },
    { id: 10, name: 'Panda', species: 'Ailuropoda melanoleuca', age: 7, habitat: 'Forest' },
  ];

  getAnimals(): Animal[] {
    return this.animals;
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  removeAnimal(id: number): void {
    this.animals = this.animals.filter(animal => animal.id !== id);
  }

  clearAnimals(): void {
    this.animals = [];
  }
}