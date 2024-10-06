import { Injectable } from '@angular/core';
import CarModel from '../interface/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  private carModels: CarModel[] = []; 

  constructor() {}

  addCarModel(carModel: CarModel): void {
    this.carModels.push(carModel);
  }


  removeCarModel(id: number): void {
    this.carModels = this.carModels.filter(carModel => carModel.id !== id);
  }

  getCarModels(): CarModel[] {
    return this.carModels;
  }
}
