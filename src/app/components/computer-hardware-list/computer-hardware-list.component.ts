import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css']
})
export class ComputerHardwareListComponent {
  hardwareList: string[] = [
    'Motherboard',
    'Processor (CPU)',
    'Random Access Memory (RAM)',
    'Graphics Card (GPU)',
    'Power Supply Unit (PSU)',
    'Storage Drive (HDD/SSD)',
    'Cooling System',
    'Computer Case',
    'Optical Drive',
    'Network Interface Card (NIC)'
  ];
  component: string = '';

 
  addComponent() {
    if (this.component) { 
      this.hardwareList.push(this.component);
      this.component = ''; 
    }
  }
}
