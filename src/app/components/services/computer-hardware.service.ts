import { Injectable } from '@angular/core';
import { ComputerHardware } from '../../../interface/computer-hardware';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareService {
  private hardwareList: ComputerHardware[] = [
    { id: 1, component: 'CPU', brand: 'Intel', model: 'i7-10700K', specifications: '8 cores, 16 threads, 3.8GHz', price: 350 },
    { id: 2, component: 'GPU', brand: 'NVIDIA', model: 'RTX 3070', specifications: '8GB GDDR6', price: 500 },
    { id: 3, component: 'RAM', brand: 'Corsair', model: 'Vengeance LPX', specifications: '16GB DDR4', price: 80 },
    { id: 4, component: 'Motherboard', brand: 'ASUS', model: 'ROG Strix Z490-E', specifications: 'ATX, LGA 1200', price: 250 },
  ];

  getHardwareList(): ComputerHardware[] {
    return this.hardwareList;
  }

  addHardware(hardware: ComputerHardware): void {
    this.hardwareList.push(hardware);
  }

  removeHardware(id: number): void {
    this.hardwareList = this.hardwareList.filter(hardware => hardware.id !== id);
  }

  clearHardware(): void {
    this.hardwareList = [];
  }
}
