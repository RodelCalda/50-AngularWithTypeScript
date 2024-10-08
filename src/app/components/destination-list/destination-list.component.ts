import { Component } from '@angular/core';
import { DestinationListService } from '../services/destination-list.service';
import { Destination } from '../../../interface/destination';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationListComponent {
  newDestination: Destination = { id: 0, name: '', country: '', description: '', popular: false };
  destinationList: Destination[] = [];

  constructor(private destinationService: DestinationListService) {
    this.destinationList = this.destinationService.getDestinations(); 
  }

  addDestination() {
    if (this.newDestination.name.trim() && this.newDestination.country.trim() && this.newDestination.description.trim()) {
      const newId = this.destinationList.length ? this.destinationList[this.destinationList.length - 1].id + 1 : 1;
      const destinationToAdd: Destination = { ...this.newDestination, id: newId };

      this.destinationService.addDestination(destinationToAdd);
      this.newDestination = { id: 0, name: '', country: '', description: '', popular: false }; 
      this.destinationList = this.destinationService.getDestinations(); 
    }
  }

  removeDestination(id: number) {
    this.destinationService.removeDestination(id);
    this.destinationList = this.destinationService.getDestinations();
  }

  clearDestinations() {
    this.destinationService.clearDestinations(); 
    this.destinationList = this.destinationService.getDestinations(); 
  }
}

