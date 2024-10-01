import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  cityList: string[] = ["Caloocan City" , "Quezon City"]; 
  cityName: string = '';  

 
  addCity() {
    if (this.cityName) { 
      this.cityList.push(this.cityName);
      this.cityName = ''; 
    }
  }
}

