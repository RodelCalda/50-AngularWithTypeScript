import { Component } from '@angular/core';
import { BuildingListService } from '../services/building-list.service';
import { Building } from '../../../interface/building'; 

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
})
export class BuildingListComponent {
  newBuilding: Building = { id: 0, name: '', address: '', floors: 0, builtYear: 0 };
  buildingList: Building[] = [];

  constructor(private buildingService: BuildingListService) {
    this.buildingList = this.buildingService.getBuildings(); 
  }

  addBuilding() {
    if (this.newBuilding.name.trim() && this.newBuilding.address.trim() && this.newBuilding.floors > 0 && this.newBuilding.builtYear > 0) {
      const newId = this.buildingList.length
        ? this.buildingList[this.buildingList.length - 1].id + 1
        : 1;
      const buildingToAdd: Building = { ...this.newBuilding, id: newId };

      this.buildingService.addBuilding(buildingToAdd);
      this.newBuilding = { id: 0, name: '', address: '', floors: 0, builtYear: 0 }; 
      this.buildingList = this.buildingService.getBuildings(); 
    }
  }

  removeBuilding(id: number) {
    this.buildingService.removeBuilding(id);
    this.buildingList = this.buildingService.getBuildings(); 
  }

  clearBuildings() {
    this.buildingService.clearBuildings();
    this.buildingList = this.buildingService.getBuildings();
  }
}
