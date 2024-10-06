import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private movies: string[] = ['Inception', 'The Dark Knight', 'Interstellar', 'The Matrix', 'Fight Club'];

  constructor() { }

  
  getMovies(): string[] {
    return this.movies;
  }

  
  addMovie(movie: string): void {
    if (movie && !this.movies.includes(movie)) {
      this.movies.push(movie);
    }
  }

  
  removeMovie(movie: string): void {
    this.movies = this.movies.filter(m => m !== movie);
  }
}

