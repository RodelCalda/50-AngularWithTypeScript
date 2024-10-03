import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {
  composerList: string[] = [
    'Levi Celerio',
    'Ryan Cayabyab',
    'Lucio San Pedro',
    'Antonio Molina',
    'Francisco Santiago',
    'Nicanor Abelardo',
    'Ramon Santos',
    'Jose Maceda'
  ];

  composerName: string = '';

 
  addComposer() {
    if (this.composerName) { 
      this.composerList.push(this.composerName);
      this.composerName = ''; 
    }
  }
}

