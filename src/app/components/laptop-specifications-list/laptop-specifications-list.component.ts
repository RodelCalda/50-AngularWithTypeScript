import { Component } from '@angular/core';
import { LaptopSpecificationsService } from '../services/laptop-specifications.service';
import { LaptopSpecifications } from '../../../interface/laptop-specifications';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrls: ['./laptop-specifications-list.component.css'],
})
export class LaptopSpecificationsListComponent {
  newSpecification: LaptopSpecifications = { id: 0, brand: '', model: '', processor: '', ramSize: '', storage: '', graphics: '', display: '', price: 0 };
  specificationsList: LaptopSpecifications[] = [];

  constructor(private specificationsService: LaptopSpecificationsService) {
    this.specificationsList = this.specificationsService.getSpecifications(); 
  }

  addSpecification() {
    if (this.newSpecification.brand.trim() && this.newSpecification.model.trim() && this.newSpecification.price > 0) {
      const newId = this.specificationsList.length ? this.specificationsList[this.specificationsList.length - 1].id + 1 : 1;
      const specificationToAdd: LaptopSpecifications = { ...this.newSpecification, id: newId };

      this.specificationsService.addSpecification(specificationToAdd);
      this.newSpecification = { id: 0, brand: '', model: '', processor: '', ramSize: '', storage: '', graphics: '', display: '', price: 0 }; 
      this.specificationsList = this.specificationsService.getSpecifications(); 
    }
  }

  removeSpecification(id: number) {
    this.specificationsService.removeSpecification(id);
    this.specificationsList = this.specificationsService.getSpecifications(); 
  }

  clearSpecifications() {
    this.specificationsService.clearSpecifications(); 
    this.specificationsList = this.specificationsService.getSpecifications(); 
  }
}

