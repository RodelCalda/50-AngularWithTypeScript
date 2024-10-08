import { Component } from '@angular/core';
import { ComputerHardwareService } from '../services/computer-hardware.service';
import { ComputerHardware } from '../../../interface/computer-hardware';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css'],
})
export class ComputerHardwareListComponent {
  newHardware: ComputerHardware = { id: 0, component: '', brand: '', model: '', specifications: '', price: 0 };
  hardwareList: ComputerHardware[] = [];

  constructor(private hardwareService: ComputerHardwareService) {
    this.hardwareList = this.hardwareService.getHardwareList(); 
  }

  addHardware() {
    if (this.newHardware.component.trim() && this.newHardware.brand.trim() && this.newHardware.model.trim() && this.newHardware.price > 0) {
      const newId = this.hardwareList.length ? this.hardwareList[this.hardwareList.length - 1].id + 1 : 1;
      const hardwareToAdd: ComputerHardware = { ...this.newHardware, id: newId };

      this.hardwareService.addHardware(hardwareToAdd);
      this.newHardware = { id: 0, component: '', brand: '', model: '', specifications: '', price: 0 }; 
      this.hardwareList = this.hardwareService.getHardwareList(); 
    }
  }

  removeHardware(id: number) {
    this.hardwareService.removeHardware(id);
    this.hardwareList = this.hardwareService.getHardwareList(); 
  }

  clearHardware() {
    this.hardwareService.clearHardware(); 
    this.hardwareList = this.hardwareService.getHardwareList(); 
  }
}
