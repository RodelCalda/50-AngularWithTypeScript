import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent {
  carModelList: string[] = ["Ford" , "Civic"]; 
  carModel: string = '';       

  
  addCarModel() {
    if (this.carModel) { 
      this.carModelList.push(this.carModel);
      this.carModel = ''; 
    }
  }
}

