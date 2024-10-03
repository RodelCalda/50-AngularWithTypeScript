import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
 
  eventList: { name: string; date: Date }[] = [];
  
  eventName: string = '';
  eventDate: Date | null = null;

  
  addEvent() {
    if (this.eventName && this.eventDate) { 
      this.eventList.push({ name: this.eventName, date: this.eventDate });
      this.eventName = ''; 
      this.eventDate = null;
    }
  }
}
