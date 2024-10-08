import { Component } from '@angular/core';
import { CountryListService } from '../services/country-list.service';
import { Country } from '../../../interface/country'; 

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  newCountry: Country = { id: 0, name: '', code: '' };
  countryList: Country[] = [];

  constructor(private countryService: CountryListService) {
    this.countryList = this.countryService.getCountries();
  }

  addCountry() {
    if (this.newCountry.name.trim() && this.newCountry.code.trim()) {
      const newId = this.countryList.length ? this.countryList[this.countryList.length - 1].id + 1 : 1;
      const countryToAdd: Country = { ...this.newCountry, id: newId };

      this.countryService.addCountry(countryToAdd);
      this.newCountry = { id: 0, name: '', code: '' }; 
      this.countryList = this.countryService.getCountries(); 
    }
  }

  removeCountry(id: number) {
    this.countryService.removeCountry(id);
    this.countryList = this.countryService.getCountries(); 
  }

  clearCountries() {
    this.countryService.clearCountries(); 
    this.countryList = this.countryService.getCountries(); 
  }
}

