import { Component } from '@angular/core';
import { LanguageListService } from '../services/language-list.service';
import { Language } from '../../../interface/language';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
})
export class LanguageListComponent {
  newLanguage: Language = { id: 0, name: '', paradigm: '', year: 0 };
  languageList: Language[] = [];

  constructor(private languageService: LanguageListService) {
    this.languageList = this.languageService.getLanguages(); 
  }

  addLanguage() {
    if (this.newLanguage.name.trim() && this.newLanguage.paradigm.trim() && this.newLanguage.year > 0) {
      const newId = this.languageList.length ? this.languageList[this.languageList.length - 1].id + 1 : 1;
      const languageToAdd: Language = { ...this.newLanguage, id: newId };

      this.languageService.addLanguage(languageToAdd);
      this.newLanguage = { id: 0, name: '', paradigm: '', year: 0 };
      this.languageList = this.languageService.getLanguages(); 
    }
  }

  removeLanguage(id: number) {
    this.languageService.removeLanguage(id);
    this.languageList = this.languageService.getLanguages(); 
  }

  clearLanguages() {
    this.languageService.clearLanguages(); 
    this.languageList = this.languageService.getLanguages(); 
  }
}

