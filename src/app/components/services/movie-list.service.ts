import { Injectable } from '@angular/core';
import { Movie } from '../../../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Science Fiction' },
    { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseYear: 1994, genre: 'Drama' },
    { id: 3, title: 'The Godfather', director: 'Francis Ford Coppola', releaseYear: 1972, genre: 'Crime' },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  removeMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  clearMovies(): void {
    this.movies = [];
  }
}

