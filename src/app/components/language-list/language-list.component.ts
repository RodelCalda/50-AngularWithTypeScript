import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent {
  languageList: string[] = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'PHP',
    'Swift',
    'Go',
    'Kotlin',
    'Rust',
    'TypeScript',
    'Scala',
    'Perl',
    'R',
  ]; 
  languageName: string = ''; 

  
  addLanguage() {
    if (this.languageName) { 
      this.languageList.push(this.languageName);
      this.languageName = ''; 
    }
  }
}

