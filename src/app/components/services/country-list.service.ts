// src/app/services/country-list.service.ts
import { Injectable } from '@angular/core';
import { Country } from '../../../interface/country';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  private countries: Country[] = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'United Kingdom', code: 'UK' },
    { id: 4, name: 'Australia', code: 'AU' },
    { id: 5, name: 'India', code: 'IN' },
  ];

  getCountries(): Country[] {
    return this.countries;
  }

  addCountry(country: Country): void {
    this.countries.push(country);
  }

  removeCountry(id: number): void {
    this.countries = this.countries.filter(country => country.id !== id);
  }

  clearCountries(): void {
    this.countries = [];
  }
}
