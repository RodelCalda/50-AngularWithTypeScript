import { Component } from '@angular/core';
import { AccessoryListService } from '../services/accessory-list.service';
import { Accessory } from '../../../interface/accessory';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css'],
})
export class AccessoryListComponent {
  newAccessory: Accessory = { id: 0, name: '', category: '', brand: '', price: 0 };
  accessoryList: Accessory[] = [];

  constructor(private accessoryService: AccessoryListService) {
    this.accessoryList = this.accessoryService.getAccessories();
  }

  addAccessory() {
    if (
      this.newAccessory.name.trim() &&
      this.newAccessory.category.trim() &&
      this.newAccessory.brand.trim() &&
      this.newAccessory.price > 0
    ) {
      const newId = this.accessoryList.length
        ? this.accessoryList[this.accessoryList.length - 1].id + 1
        : 1;
      const accessoryToAdd: Accessory = { ...this.newAccessory, id: newId };

      this.accessoryService.addAccessory(accessoryToAdd);
      this.newAccessory = { id: 0, name: '', category: '', brand: '', price: 0 }; 
      this.accessoryList = this.accessoryService.getAccessories(); 
    }
  }

  removeAccessory(id: number) {
    this.accessoryService.removeAccessory(id);
    this.accessoryList = this.accessoryService.getAccessories();
  }

  clearAccessories() {
    this.accessoryService.clearAccessories();
    this.accessoryList = this.accessoryService.getAccessories();
  }
}
