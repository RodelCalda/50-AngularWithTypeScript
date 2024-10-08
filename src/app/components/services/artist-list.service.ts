import { Injectable } from '@angular/core';
import { Artist } from '../../../interface/artist'; 

@Injectable({
  providedIn: 'root',
})
export class ArtistListService {
  private artists: Artist[] = [
    { id: 1, name: 'Vincent van Gogh', genre: 'Post-Impressionism', nationality: 'Dutch', birthYear: 1853 },
    { id: 2, name: 'Pablo Picasso', genre: 'Cubism', nationality: 'Spanish', birthYear: 1881 },
    { id: 3, name: 'Leonardo da Vinci', genre: 'Renaissance', nationality: 'Italian', birthYear: 1452 },
  ];

  getArtists(): Artist[] {
    return this.artists;
  }

  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  removeArtist(id: number): void {
    this.artists = this.artists.filter(artist => artist.id !== id);
  }

  clearArtists(): void {
    this.artists = [];
  }
}
