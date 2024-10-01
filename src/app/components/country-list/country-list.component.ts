import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  continents: string[] = ['Asia', 'Africa', 'North America', 'South America', 'Europe', 'Australia/Oceania', 'Antarctica'];
  countryList: { [key: string]: string[] } = {
    'Asia': ['China', 'India', 'Japan', 'South Korea'],
    'Africa': ['Nigeria', 'Egypt', 'South Africa', 'Kenya'],
    'North America': ['United States', 'Canada', 'Mexico', 'Cuba'],
    'South America': ['Brazil', 'Argentina', 'Colombia', 'Chile'],
    'Europe': ['Germany', 'United Kingdom', 'France', 'Italy'],
    'Australia/Oceania': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
    'Antarctica': ['No permanent residents']
  };
  
  countryName: string = ''; 
  selectedContinent: string = ''; 

  addCountry() {
    if (this.countryName && this.selectedContinent) { 
      this.countryList[this.selectedContinent].push(this.countryName);
      this.countryName = ''; 
      this.selectedContinent = ''; 
    }
  }
}
