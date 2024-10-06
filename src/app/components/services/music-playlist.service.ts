import { Injectable } from '@angular/core';
import { MusicTrack } from '../../../interface/music-track'; 

@Injectable({
  providedIn: 'root'
})
export class MusicPlaylistService {
  private playlist: MusicTrack[] = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: '05:55' },
    { id: 2, title: 'Imagine', artist: 'John Lennon', album: 'Imagine', duration: '03:03' }
  ];

  getPlaylist(): MusicTrack[] {
    return this.playlist;
  }

  addTrack(track: MusicTrack): void {
    this.playlist.push(track);
  }

  removeTrack(id: number): void {
    this.playlist = this.playlist.filter(track => track.id !== id);
  }

  clearPlaylist(): void {
    this.playlist = [];
  }
}