// src/app/components/city-list/city-list.component.ts
import { Component } from '@angular/core';
import { CityListService } from '../services/city-list.service';
import { City } from '../../../interface/city'; 

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  newCity: City = { id: 0, name: '', country: '', population: 0, area: 0 };
  cityList: City[] = [];

  constructor(private cityService: CityListService) {
    this.cityList = this.cityService.getCities(); 
  }

  addCity() {
    if (this.newCity.name.trim() && this.newCity.country.trim() && this.newCity.population > 0 && this.newCity.area > 0) {
      const newId = this.cityList.length ? this.cityList[this.cityList.length - 1].id + 1 : 1;
      const cityToAdd: City = { ...this.newCity, id: newId };

      this.cityService.addCity(cityToAdd);
      this.newCity = { id: 0, name: '', country: '', population: 0, area: 0 }; 
      this.cityList = this.cityService.getCities();
    }
  }

  removeCity(id: number) {
    this.cityService.removeCity(id);
    this.cityList = this.cityService.getCities(); 
  }

  clearCities() {
    this.cityService.clearCities(); 
    this.cityList = this.cityService.getCities(); 
  }
}


