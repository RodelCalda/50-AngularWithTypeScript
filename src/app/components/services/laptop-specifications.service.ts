import { Injectable } from '@angular/core';
import { LaptopSpecifications } from '../../../interface/laptop-specifications';

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecificationsService {
  private specifications: LaptopSpecifications[] = [
    { id: 1, brand: 'Dell', model: 'XPS 13', processor: 'Intel i7', ramSize: '16GB', storage: '512GB SSD', graphics: 'Intel Iris Xe', display: '13.4 inches Full HD', price: 1500 },
    { id: 2, brand: 'Apple', model: 'MacBook Pro', processor: 'M1', ramSize: '16GB', storage: '1TB SSD', graphics: 'Apple M1', display: '13.3 inches Retina', price: 2500 }
  ];

  getSpecifications(): LaptopSpecifications[] {
    return this.specifications;
  }

  addSpecification(specification: LaptopSpecifications): void {
    this.specifications.push(specification);
  }

  removeSpecification(id: number): void {
    this.specifications = this.specifications.filter(spec => spec.id !== id);
  }

  clearSpecifications(): void {
    this.specifications = [];
  }
}

