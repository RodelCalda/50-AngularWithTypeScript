import { Component } from '@angular/core';
import { ArtistListService } from '../services/artist-list.service';
import { Artist } from '../../../interface/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
})
export class ArtistListComponent {
  newArtist: Artist = { id: 0, name: '', genre: '', nationality: '', birthYear: 0 };
  artistList: Artist[] = [];

  constructor(private artistService: ArtistListService) {
    this.artistList = this.artistService.getArtists(); 
  }

  addArtist() {
    if (
      this.newArtist.name.trim() &&
      this.newArtist.genre.trim() &&
      this.newArtist.nationality.trim() &&
      this.newArtist.birthYear > 0
    ) {
      const newId = this.artistList.length
        ? this.artistList[this.artistList.length - 1].id + 1
        : 1;
      const artistToAdd: Artist = { ...this.newArtist, id: newId };

      this.artistService.addArtist(artistToAdd);
      this.newArtist = { id: 0, name: '', genre: '', nationality: '', birthYear: 0 }; 
      this.artistList = this.artistService.getArtists(); 
    }
  }

  removeArtist(id: number) {
    this.artistService.removeArtist(id);
    this.artistList = this.artistService.getArtists(); 
  }

  clearArtists() {
    this.artistService.clearArtists();
    this.artistList = this.artistService.getArtists(); 
  }
}
