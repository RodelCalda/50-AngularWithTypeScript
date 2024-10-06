// src/app/services/city-list.service.ts
import { Injectable } from '@angular/core';
import { City } from '../../../interface/city'; 

@Injectable({
  providedIn: 'root',
})
export class CityListService {
  private cities: City[] = [
    { id: 1, name: 'New York', country: 'USA', population: 8419600, area: 789 },
    { id: 2, name: 'Tokyo', country: 'Japan', population: 13929286, area: 2191 },
    { id: 3, name: 'London', country: 'UK', population: 8982000, area: 1572 },
  ];

  getCities(): City[] {
    return this.cities;
  }

  addCity(city: City): void {
    this.cities.push(city);
  }

  removeCity(id: number): void {
    this.cities = this.cities.filter(city => city.id !== id);
  }

  clearCities(): void {
    this.cities = [];
  }
}

