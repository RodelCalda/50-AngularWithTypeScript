import { Injectable } from '@angular/core';
import { VideoGame } from '../../../interface/video-game'; 

@Injectable({
  providedIn: 'root',
})
export class VideoGameListService {
  private videoGames: VideoGame[] = [
    { id: 1, title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-Adventure', platform: 'Nintendo Switch', releaseYear: 2017 },
    { id: 2, title: 'God of War', genre: 'Action-Adventure', platform: 'PS4', releaseYear: 2018 },
    { id: 3, title: 'Cyberpunk 2077', genre: 'RPG', platform: 'PC', releaseYear: 2020 },
    { id: 4, title: 'Halo Infinite', genre: 'Shooter', platform: 'Xbox Series X', releaseYear: 2021 },
    { id: 5, title: 'The Witcher 3: Wild Hunt', genre: 'RPG', platform: 'PC', releaseYear: 2015 },
    { id: 6, title: 'Red Dead Redemption 2', genre: 'Action-Adventure', platform: 'PS4', releaseYear: 2018 },
    { id: 7, title: 'Fortnite', genre: 'Battle Royale', platform: 'PC', releaseYear: 2017 },
    { id: 8, title: 'Minecraft', genre: 'Sandbox', platform: 'Multi-platform', releaseYear: 2011 },
    { id: 9, title: 'Among Us', genre: 'Party', platform: 'PC', releaseYear: 2018 },
    { id: 10, title: 'Call of Duty: Warzone', genre: 'Battle Royale', platform: 'Multi-platform', releaseYear: 2020 },
  ];

  getVideoGames(): VideoGame[] {
    return this.videoGames;
  }

  addVideoGame(videoGame: VideoGame): void {
    this.videoGames.push(videoGame);
  }

  removeVideoGame(id: number): void {
    this.videoGames = this.videoGames.filter(videoGame => videoGame.id !== id);
  }

  clearVideoGames(): void {
    this.videoGames = [];
  }
}