import { Component } from '@angular/core';
import { MusicPlaylistService } from '../services/music-playlist.service'; 
import { MusicTrack } from '../../../interface/music-track'; 

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css']
})
export class MusicPlaylistComponent {
  newTrack: MusicTrack = { id: 0, title: '', artist: '', album: '', duration: '' };
  playlist: MusicTrack[] = [];

  constructor(private playlistService: MusicPlaylistService) {
    this.playlist = this.playlistService.getPlaylist(); 
  }

  addTrack() {
    if (this.newTrack.title.trim() && this.newTrack.artist.trim() && this.newTrack.album.trim() && this.newTrack.duration.trim()) {
      const newId = this.playlist.length ? this.playlist[this.playlist.length - 1].id + 1 : 1;
      const trackToAdd: MusicTrack = { ...this.newTrack, id: newId };

      this.playlistService.addTrack(trackToAdd);
      this.newTrack = { id: 0, title: '', artist: '', album: '', duration: '' }; 
      this.playlist = this.playlistService.getPlaylist(); 
    }
  }

  removeTrack(id: number) {
    this.playlistService.removeTrack(id);
    this.playlist = this.playlistService.getPlaylist(); 
  }

  clearPlaylist() {
    this.playlistService.clearPlaylist(); 
    this.playlist = this.playlistService.getPlaylist(); 
  }
}

