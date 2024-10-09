import { Injectable } from '@angular/core';
import { Tour } from '../../../interface/tour';

@Injectable({
  providedIn: 'root'
})
export class TourListService {
  private tours: Tour[] = [
    { id: 1, destination: 'Paris', duration: 5, price: 1200, startDate: '2024-12-01' },
    { id: 2, destination: 'New York', duration: 3, price: 800, startDate: '2024-11-15' }
  ];

  
  getTours(): Tour[] {
    return this.tours;
  }

 
  addTour(tour: Tour): void {
    this.tours.push(tour);
  }

 
  removeTour(id: number): void {
    this.tours = this.tours.filter(t => t.id !== id);
  }


  clearTours(): void {
    this.tours = [];
  }
}
