import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css']
})
export class MusicPlaylistComponent {
  musicList: { name: string, artist: string }[] = [
    { name: 'Shape of You', artist: 'Ed Sheeran' },
    { name: 'Blinding Lights', artist: 'The Weeknd' },
    { name: 'Levitating', artist: 'Dua Lipa' },
    { name: 'Watermelon Sugar', artist: 'Harry Styles' },
    { name: 'Peaches', artist: 'Justin Bieber' }
  ]; 
  songName: string = '';
  artistName: string = '';

  
  addSong() {
    if (this.songName && this.artistName) { 
      this.musicList.push({ name: this.songName, artist: this.artistName });
      this.songName = ''; 
      this.artistName = '';
    }
  }
}

