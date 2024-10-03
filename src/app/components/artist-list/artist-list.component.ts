import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  artistList: string[] = [
    'Juan Luna',
    'Fernando Amorsolo',
    'Vicente Manansala',
    'Victorio Edades',
    'Jose Joya',
    'Hernando R. Ocampo',
    'Ang Kiukok',
    'Benedicto Cabrera (BenCab)'
  ];

  artistName: string = '';

  
  addArtist() {
    if (this.artistName) { 
      this.artistList.push(this.artistName);
      this.artistName = '';
    }
  }
}

