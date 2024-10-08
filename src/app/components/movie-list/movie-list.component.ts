// src/app/components/movie-list/movie-list.component.ts
import { Component } from '@angular/core';
import { MovieListService } from '../services/movie-list.service';
import { Movie } from '../../../interface/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  newMovie: Movie = { id: 0, title: '', director: '', releaseYear: 0, genre: '' };
  movieList: Movie[] = [];

  constructor(private movieService: MovieListService) {
    this.movieList = this.movieService.getMovies(); // Load initial movies
  }

  addMovie() {
    if (this.newMovie.title.trim() && this.newMovie.director.trim() && this.newMovie.releaseYear > 0 && this.newMovie.genre.trim()) {
      const newId = this.movieList.length ? this.movieList[this.movieList.length - 1].id + 1 : 1;
      const movieToAdd: Movie = { ...this.newMovie, id: newId };

      this.movieService.addMovie(movieToAdd);
      this.newMovie = { id: 0, title: '', director: '', releaseYear: 0, genre: '' }; // Reset the form
      this.movieList = this.movieService.getMovies(); // Refresh the list
    }
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id);
    this.movieList = this.movieService.getMovies(); // Refresh the list
  }

  clearMovies() {
    this.movieService.clearMovies(); // Call the service method
    this.movieList = this.movieService.getMovies(); // Refresh the list
  }
}




