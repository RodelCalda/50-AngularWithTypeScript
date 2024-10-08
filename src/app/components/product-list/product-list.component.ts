import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Product } from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  newProduct: Product = { id: 0, name: '', price: 0, stock: 0 };
  productList: Product[] = [];

  constructor(private productService: ProductListService) {
    this.productList = this.productService.getProducts(); 
  }

  addProduct() {
    if (this.newProduct.name.trim() && this.newProduct.price > 0 && this.newProduct.stock >= 0) {
      const newId = this.productList.length ? this.productList[this.productList.length - 1].id + 1 : 1;
      const productToAdd: Product = { ...this.newProduct, id: newId };

      this.productService.addProduct(productToAdd);
      this.newProduct = { id: 0, name: '', price: 0, stock: 0 }; 
      this.productList = this.productService.getProducts(); 
    }
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
    this.productList = this.productService.getProducts(); 
  }

  clearProducts() {
    this.productService.clearProducts(); 
    this.productList = this.productService.getProducts(); 
  }
}




