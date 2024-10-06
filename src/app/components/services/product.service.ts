import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { name: 'Laptop', price: 1500, stock: 10 },
    { name: 'Phone', price: 800, stock: 25 },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(productName: string): void {
    this.products = this.products.filter(product => product.name !== productName);
  }
}

