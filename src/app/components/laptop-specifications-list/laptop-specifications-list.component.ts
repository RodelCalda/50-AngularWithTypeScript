import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrls: ['./laptop-specifications-list.component.css']
})
export class LaptopSpecificationsListComponent {
  specificationsList: string[] = [
    'Processor: Intel Core i7',
    'RAM: 16GB DDR4',
    'Storage: 512GB SSD',
    'Graphics: NVIDIA GeForce GTX 1650',
    'Display: 15.6-inch FHD',
    'Battery: 10 hours',
    'Weight: 1.8 kg',
    'OS: Windows 11',
    'Ports: USB-C, HDMI, USB 3.0',
    'Wi-Fi: Wi-Fi 6'
  ]; 
  specification: string = '';

  
  addSpecification() {
    if (this.specification) { 
      this.specificationsList.push(this.specification);
      this.specification = ''; 
    }
  }
}

