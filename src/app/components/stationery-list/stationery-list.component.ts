import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css']
})
export class StationeryListComponent {
  stationeryList: string[] = [
    'Pens',
    'Pencils',
    'Notebooks',
    'Sticky Notes',
    'Highlighters',
    'Markers',
    'Paper Clips',
    'Staplers',
    'Scissors',
    'Tape',
    'Folders',
    'Binders',
    'Erasers',
    'Rulers',
    'Whiteboard Markers'
  ];
  stationeryName: string = '';

 
  addStationery() {
    if (this.stationeryName) { 
      this.stationeryList.push(this.stationeryName);
      this.stationeryName = '';
    }
  }
}
