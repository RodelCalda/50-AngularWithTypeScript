import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent {
  paintingList: string[] = [
    'Spoliarium by Juan Luna',
    'The Parisian Life by Juan Luna',
    'Planting Rice by Fernando Amorsolo',
    'The Blood Compact by Juan Luna',
    'Madonna of the Slums by Vicente Manansala',
    'The Builders by Victorio Edades',
    'Granadean Arabesque by José Joya',
    'Bataan by Hernando R. Ocampo'
  ];

  paintingName: string = '';

  addPainting() {
    if (this.paintingName) { 
      this.paintingList.push(this.paintingName);
      this.paintingName = '';
    }
  }
}

