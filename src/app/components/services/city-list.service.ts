import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {
  private cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  constructor() { }

  getCities(): string[] {
    return this.cities;
  }

  addCity(city: string): void {
    this.cities.push(city);
  }

 
  removeCity(city: string): void {
    this.cities = this.cities.filter(c => c !== city);
  }
}
