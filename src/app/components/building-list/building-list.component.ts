import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent {
  buildingList: string[] = [
    'Main Administration Building',
    'Library',
    'Lecture Halls',
    'Student Union Building',
    'Science and Research Building',
    'Dormitories/Residential Halls',
    'Gymnasium/Sports Complex',
    'Faculty Offices Building',
    'Medical School Building'
  ];

  buildingName: string = '';

  addBuilding() {
    if (this.buildingName) { 
      this.buildingList.push(this.buildingName);
      this.buildingName = ''; 
    }
  }
}

