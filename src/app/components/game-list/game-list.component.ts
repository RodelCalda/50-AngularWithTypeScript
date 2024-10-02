import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  gameList: string[] = [
    'The Legend of Zelda: Breath of the Wild',
    'Red Dead Redemption 2',
    'Minecraft',
    'The Witcher 3: Wild Hunt',
    'Grand Theft Auto V',
    'Call of Duty: Warzone',
    'Among Us',
    'Cyberpunk 2077',
    'Halo Infinite',
    'League of Legends',
  ];
  gameName: string = ''; 

  
  addGame() {
    if (this.gameName) { 
      this.gameList.push(this.gameName);
      this.gameName = ''; 
    }
  }
}
