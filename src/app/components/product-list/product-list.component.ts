import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: string[] = ["H&M" , "ADIDAS"]; 
  productName: string = '';   

  
  addProduct() {
    if (this.productName) { 
      this.productList.push(this.productName);
      this.productName = ''; 
    }
  }
}

