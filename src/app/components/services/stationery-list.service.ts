import { Injectable } from '@angular/core';
import { Stationery } from '../../../interface/stationery';

@Injectable({
  providedIn: 'root',
})
export class StationeryListService {
  private stationeryItems: Stationery[] = [
    { id: 1, name: 'Ballpoint Pen', type: 'pen', quantity: 100, price: 0.5 },
    { id: 2, name: 'Notebook', type: 'notebook', quantity: 50, price: 2 },
    { id: 3, name: 'Highlighter', type: 'marker', quantity: 75, price: 1.5 },
    
  ];

  getStationeryItems(): Stationery[] {
    return this.stationeryItems;
  }

  addStationeryItem(stationery: Stationery): void {
    this.stationeryItems.push(stationery);
  }

  removeStationeryItem(id: number): void {
    this.stationeryItems = this.stationeryItems.filter(item => item.id !== id);
  }

  clearStationeryItems(): void {
    this.stationeryItems = [];
  }
}
