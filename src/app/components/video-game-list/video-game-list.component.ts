import { Component } from '@angular/core';
import { VideoGameListService } from '../services/video-game-list.service';
import { VideoGame } from '../../../interface/video-game';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.css'],
})
export class VideoGameListComponent {
  newVideoGame: VideoGame = { id: 0, title: '', genre: '', platform: '', releaseYear: 0 };
  videoGameList: VideoGame[] = [];

  constructor(private videoGameService: VideoGameListService) {
    this.videoGameList = this.videoGameService.getVideoGames(); 
  }

  addVideoGame() {
    if (this.newVideoGame.title.trim() && this.newVideoGame.genre.trim() && this.newVideoGame.platform.trim() && this.newVideoGame.releaseYear > 0) {
      const newId = this.videoGameList.length ? this.videoGameList[this.videoGameList.length - 1].id + 1 : 1;
      const videoGameToAdd: VideoGame = { ...this.newVideoGame, id: newId };

      this.videoGameService.addVideoGame(videoGameToAdd);
      this.newVideoGame = { id: 0, title: '', genre: '', platform: '', releaseYear: 0 }; 
      this.videoGameList = this.videoGameService.getVideoGames(); 
    }
  }

  removeVideoGame(id: number) {
    this.videoGameService.removeVideoGame(id);
    this.videoGameList = this.videoGameService.getVideoGames(); 
  }

  clearVideoGames() {
    this.videoGameService.clearVideoGames(); 
    this.videoGameList = this.videoGameService.getVideoGames();
  }
}
