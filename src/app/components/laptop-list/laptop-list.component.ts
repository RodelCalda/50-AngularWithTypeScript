import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  laptopList: string[] = [
    'Apple MacBook Air',
    'Dell XPS 13',
    'HP Spectre x360',
    'Lenovo ThinkPad X1 Carbon',
    'Asus ROG Zephyrus G14',
    'Microsoft Surface Laptop 4',
    'Acer Swift 3',
    'Razer Blade 15',
  ]; 
  laptopModel: string = '';

  addLaptop() {
    if (this.laptopModel) { 
      this.laptopList.push(this.laptopModel);
      this.laptopModel = ''; 
    }
  }
}

