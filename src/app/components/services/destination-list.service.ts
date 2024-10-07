import { Injectable } from '@angular/core';
import { Destination } from '../../../interface/destination';

@Injectable({
  providedIn: 'root',
})
export class DestinationListService {
  private destinations: Destination[] = [
    { id: 1, name: 'Paris', country: 'France', description: 'City of Light', popular: true },
    { id: 2, name: 'Kyoto', country: 'Japan', description: 'Ancient temples and beautiful gardens', popular: true },
    { id: 3, name: 'Cape Town', country: 'South Africa', description: 'Stunning beaches and landscapes', popular: false },

  ];

  getDestinations(): Destination[] {
    return this.destinations;
  }

  addDestination(destination: Destination): void {
    this.destinations.push(destination);
  }

  removeDestination(id: number): void {
    this.destinations = this.destinations.filter(destination => destination.id !== id);
  }

  clearDestinations(): void {
    this.destinations = [];
  }
}
