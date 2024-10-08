import { Component } from '@angular/core';
import { SportsListService } from '../services/sports-list.service';
import { Sport } from '../../../interface/sports'; 

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css'],
})
export class SportsListComponent {
  newSport: Sport = { id: 0, name: '', category: '' };
  sportsList: Sport[] = [];

  constructor(private sportsService: SportsListService) {
    this.sportsList = this.sportsService.getSports();
  }

  addSport() {
    if (this.newSport.name.trim() && this.newSport.category.trim()) {
      const newId = this.sportsList.length ? this.sportsList[this.sportsList.length - 1].id + 1 : 1;
      const sportToAdd: Sport = { ...this.newSport, id: newId };

      this.sportsService.addSport(sportToAdd);
      this.newSport = { id: 0, name: '', category: '' };
      this.sportsList = this.sportsService.getSports(); 
    }
  }

  removeSport(id: number) {
    this.sportsService.removeSport(id);
    this.sportsList = this.sportsService.getSports(); // Refresh the list
  }

  clearSports() {
    this.sportsService.clearSports(); // Clear all sports
    this.sportsList = this.sportsService.getSports(); // Refresh the list
  }
}

