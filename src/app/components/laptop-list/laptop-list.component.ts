import { Component } from '@angular/core';
import { LaptopListService } from '../services/laptop-list.service';
import { Laptop } from '../../../interface/laptop'; 

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css'],
})
export class LaptopListComponent {
  newLaptop: Laptop = { id: 0, brand: '', model: '', processor: '', ramSize: '', storage: '', price: 0 };
  laptopList: Laptop[] = [];

  constructor(private laptopService: LaptopListService) {
    this.laptopList = this.laptopService.getLaptops(); 
  }

  addLaptop() {
    if (this.newLaptop.brand.trim() && this.newLaptop.model.trim() && this.newLaptop.price > 0) {
      const newId = this.laptopList.length ? this.laptopList[this.laptopList.length - 1].id + 1 : 1;
      const laptopToAdd: Laptop = { ...this.newLaptop, id: newId };

      this.laptopService.addLaptop(laptopToAdd);
      this.newLaptop = { id: 0, brand: '', model: '', processor: '', ramSize: '', storage: '', price: 0 }; // Reset the form
      this.laptopList = this.laptopService.getLaptops();
    }
  }

  removeLaptop(id: number) {
    this.laptopService.removeLaptop(id);
    this.laptopList = this.laptopService.getLaptops(); 
  }

  clearLaptops() {
    this.laptopService.clearLaptops(); 
    this.laptopList = this.laptopService.getLaptops(); 
  }
}

