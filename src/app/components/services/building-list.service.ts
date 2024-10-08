import { Injectable } from '@angular/core';
import { Building } from '../../../interface/building'; 

@Injectable({
  providedIn: 'root',
})
export class BuildingListService {
  private buildings: Building[] = [
    { id: 1, name: 'Empire State Building', address: 'New York, NY', floors: 102, builtYear: 1931 },
    { id: 2, name: 'Burj Khalifa', address: 'Dubai, UAE', floors: 163, builtYear: 2010 },
    { id: 3, name: 'Willis Tower', address: 'Chicago, IL', floors: 110, builtYear: 1973 },
  ];

  getBuildings(): Building[] {
    return this.buildings;
  }

  addBuilding(building: Building): void {
    this.buildings.push(building);
  }

  removeBuilding(id: number): void {
    this.buildings = this.buildings.filter(building => building.id !== id);
  }

  clearBuildings(): void {
    this.buildings = [];
  }
}
