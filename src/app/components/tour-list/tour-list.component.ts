import { Component } from '@angular/core';
import { TourListService } from '../services/tour-list.service';
import { Tour } from '../../../interface/tour';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css'],
})
export class TourListComponent {
  newTour: Tour = { id: 0, destination: '', duration: 0, price: 0, startDate: '' };
  tourList: Tour[] = [];

  constructor(private tourService: TourListService) {
    this.tourList = this.tourService.getTours(); 
  }

  addTour() {
    if (this.newTour.destination.trim() && this.newTour.duration > 0 && this.newTour.price > 0 && this.newTour.startDate.trim()) {
      const newId = this.tourList.length ? this.tourList[this.tourList.length - 1].id + 1 : 1;
      const tourToAdd: Tour = { ...this.newTour, id: newId };

      this.tourService.addTour(tourToAdd);
      this.newTour = { id: 0, destination: '', duration: 0, price: 0, startDate: '' }; 
      this.tourList = this.tourService.getTours(); 
    }
  }

  removeTour(id: number) {
    this.tourService.removeTour(id);
    this.tourList = this.tourService.getTours(); 
  }

  clearTours() {
    this.tourService.clearTours(); 
    this.tourList = this.tourService.getTours(); 
  }
}
