import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  destinationList: string[] = [
    'Paris, France',
    'Tokyo, Japan',
    'New York City, USA',
    'Rome, Italy',
    'Sydney, Australia',
    'London, England',
    'Barcelona, Spain',
    'Bangkok, Thailand',
    'Dubai, UAE',
    'Singapore',
    'Santorini, Greece',
  ];
  destinationName: string = '';

 
  addDestination() {
    if (this.destinationName) { 
      this.destinationList.push(this.destinationName);
      this.destinationName = ''; 
    }
  }
}
