import { Injectable } from '@angular/core';
import { Product } from '../../../interface/product'; 

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private products: Product[] = [
    { id: 1, name: 'Apple', price: 1.5, stock: 100 },
    { id: 2, name: 'Banana', price: 1.0, stock: 150 },
    { id: 3, name: 'Orange', price: 2.0, stock: 200 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  clearProducts(): void {
    this.products = [];
  }
}

