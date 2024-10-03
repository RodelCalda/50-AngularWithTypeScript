import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  tourList: { location: string; date: Date }[] = [];
  tourLocation: string = '';
  tourDate: Date | null = null;

  addTour() {
    if (this.tourLocation && this.tourDate) { 
      this.tourList.push({ location: this.tourLocation, date: this.tourDate });
      this.tourLocation = ''; 
      this.tourDate = null; 
    }
  }
}

