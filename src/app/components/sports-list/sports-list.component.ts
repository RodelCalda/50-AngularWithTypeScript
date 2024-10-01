import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent {
  sportsList: string[] = [
    'Soccer', 
    'Basketball',
    'Tennis',
    'Baseball',
    'Golf',
    'Volleyball',
    'Table Tennis',
  ]; 
  sportName: string = ''; 

  
  addSport() {
    if (this.sportName) {
      this.sportsList.push(this.sportName);
      this.sportName = '';
    }
  }
}

