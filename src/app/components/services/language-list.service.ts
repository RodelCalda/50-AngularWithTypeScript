import { Injectable } from '@angular/core';
import { Language } from '../../../interface/language'; 

@Injectable({
  providedIn: 'root',
})
export class LanguageListService {
  private languages: Language[] = [
    { id: 1, name: 'JavaScript', paradigm: 'multi-paradigm', year: 1995 },
    { id: 2, name: 'Python', paradigm: 'object-oriented', year: 1991 },
    { id: 3, name: 'Java', paradigm: 'object-oriented', year: 1995 },
    { id: 4, name: 'C#', paradigm: 'object-oriented', year: 2000 },
    { id: 5, name: 'C++', paradigm: 'multi-paradigm', year: 1985 },
    { id: 6, name: 'Ruby', paradigm: 'object-oriented', year: 1995 },
    { id: 7, name: 'Go', paradigm: 'concurrent', year: 2009 },
    { id: 8, name: 'Rust', paradigm: 'multi-paradigm', year: 2010 },
    { id: 9, name: 'PHP', paradigm: 'object-oriented', year: 1994 },
    { id: 10, name: 'Swift', paradigm: 'multi-paradigm', year: 2014 },
  ];

  getLanguages(): Language[] {
    return this.languages;
  }

  addLanguage(language: Language): void {
    this.languages.push(language);
  }

  removeLanguage(id: number): void {
    this.languages = this.languages.filter(language => language.id !== id);
  }

  clearLanguages(): void {
    this.languages = [];
  }
}