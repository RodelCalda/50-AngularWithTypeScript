import { Injectable } from '@angular/core';
import { Event } from '../../../interface/event'; 

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private events: Event[] = [
    { id: 1, name: 'Tech Conference', location: 'New York', date: '2024-11-10', description: 'A conference on emerging tech.' },
    { id: 2, name: 'Music Festival', location: 'Los Angeles', date: '2024-12-15', description: 'A festival featuring various artists.' }
  ];

  
  getEvents(): Event[] {
    return this.events;
  }

  
  addEvent(event: Event): void {
    this.events.push(event);
  }

  
  removeEvent(id: number): void {
    this.events = this.events.filter(e => e.id !== id);
  }

  
  clearEvents(): void {
    this.events = [];
  }
}
