import { Injectable } from '@angular/core';
import { Sport } from '../../../interface/sports';

@Injectable({
  providedIn: 'root',
})
export class SportsListService {
  private sports: Sport[] = [
    { id: 1, name: 'Soccer', category: 'Team Sports' },
    { id: 2, name: 'Basketball', category: 'Team Sports' },
    { id: 3, name: 'Tennis', category: 'Individual Sports' },
    { id: 4, name: 'Swimming', category: 'Individual Sports' },
    { id: 5, name: 'Athletics', category: 'Individual Sports' },
  ];

  getSports(): Sport[] {
    return this.sports;
  }

  addSport(sport: Sport): void {
    this.sports.push(sport);
  }

  removeSport(id: number): void {
    this.sports = this.sports.filter(sport => sport.id !== id);
  }

  clearSports(): void {
    this.sports = [];
  }
}