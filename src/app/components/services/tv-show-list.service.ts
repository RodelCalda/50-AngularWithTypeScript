import { Injectable } from '@angular/core';
import { TVShow } from '../../../interface/tv-show'; 

@Injectable({
  providedIn: 'root'
})
export class TVShowListService {
  private tvShows: TVShow[] = [
    { id: 1, title: 'Breaking Bad', genre: 'Drama', seasons: 5, releaseYear: 2008 },
    { id: 2, title: 'Friends', genre: 'Comedy', seasons: 10, releaseYear: 1994 },
    { id: 3, title: 'Stranger Things', genre: 'Sci-Fi', seasons: 4, releaseYear: 2016 },
  ];

  getTVShows(): TVShow[] {
    return this.tvShows;
  }

  addTVShow(tvShow: TVShow): void {
    this.tvShows.push(tvShow);
  }

  removeTVShow(id: number): void {
    this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
  }

  clearTVShows(): void {
    this.tvShows = [];
  }
}

