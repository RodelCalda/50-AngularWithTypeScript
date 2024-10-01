import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movieList: string[] = ["One Piece" , "Batusai"]; 
  movieTitle: string = '';  

  
  addMovie() {
    if (this.movieTitle) { 
      this.movieList.push(this.movieTitle);
      this.movieTitle = ''; 
    }
  }
}

