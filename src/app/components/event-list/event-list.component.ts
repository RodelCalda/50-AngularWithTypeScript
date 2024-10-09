import { Component } from '@angular/core';
import { EventListService } from '../services/event-list.service';
import { Event } from '../../../interface/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  newEvent: Event = { id: 0, name: '', location: '', date: '', description: '' };
  eventList: Event[] = [];

  constructor(private eventService: EventListService) {
    this.eventList = this.eventService.getEvents(); 
  }

  addEvent() {
    if (
      this.newEvent.name.trim() &&
      this.newEvent.location.trim() &&
      this.newEvent.date.trim() &&
      this.newEvent.description.trim()
    ) {
      const newId = this.eventList.length
        ? this.eventList[this.eventList.length - 1].id + 1
        : 1;
      const eventToAdd: Event = { ...this.newEvent, id: newId };

      this.eventService.addEvent(eventToAdd);
      this.newEvent = { id: 0, name: '', location: '', date: '', description: '' }; 
      this.eventList = this.eventService.getEvents(); 
    }
  }

  removeEvent(id: number) {
    this.eventService.removeEvent(id);
    this.eventList = this.eventService.getEvents(); 
  }

  clearEvents() {
    this.eventService.clearEvents(); 
    this.eventList = this.eventService.getEvents(); 
  }
}
