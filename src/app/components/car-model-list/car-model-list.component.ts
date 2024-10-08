import { Component } from '@angular/core';
import { CarModelService } from '../services/car-model.service';
import CarModel from '../../../interface/car-model';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent {
  carModels: CarModel[] = []; 
  newCarModel: CarModel = { id: 0, name: '', year: 0, make: '', model: '', price: 0 }; 

  constructor(private carModelService: CarModelService) {
    this.carModels = this.carModelService.getCarModels();
  }


  addCarModel() {
    if (this.newCarModel.name.trim() && this.newCarModel.year > 0 && this.newCarModel.price > 0) {
      this.carModelService.addCarModel(this.newCarModel);
      this.newCarModel = { id: 0, name: '', year: 0, make: '', model: '', price: 0 }; 
    }
  }

  
  removeCarModel(id: number) {
    this.carModelService.removeCarModel(id);
    this.carModels = this.carModels.filter(carModel => carModel.id !== id); 
  }
}
