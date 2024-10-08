import { Component } from '@angular/core';
import { StationeryListService } from '../services/stationery-list.service';
import { Stationery } from '../../../interface/stationery';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css'],
})
export class StationeryListComponent {
  newStationery: Stationery = { id: 0, name: '', type: '', quantity: 0, price: 0 };
  stationeryList: Stationery[] = [];

  constructor(private stationeryService: StationeryListService) {
    this.stationeryList = this.stationeryService.getStationeryItems(); 
  }

  addStationery() {
    if (this.newStationery.name.trim() && this.newStationery.quantity > 0 && this.newStationery.price > 0) {
      const newId = this.stationeryList.length ? this.stationeryList[this.stationeryList.length - 1].id + 1 : 1;
      const stationeryToAdd: Stationery = { ...this.newStationery, id: newId };

      this.stationeryService.addStationeryItem(stationeryToAdd);
      this.newStationery = { id: 0, name: '', type: '', quantity: 0, price: 0 }; 
      this.stationeryList = this.stationeryService.getStationeryItems(); 
    }
  }

  removeStationery(id: number) {
    this.stationeryService.removeStationeryItem(id);
    this.stationeryList = this.stationeryService.getStationeryItems(); 
  }

  clearStationery() {
    this.stationeryService.clearStationeryItems(); 
    this.stationeryList = this.stationeryService.getStationeryItems();
  }
}
