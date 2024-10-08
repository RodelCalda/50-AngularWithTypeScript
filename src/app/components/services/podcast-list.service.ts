import { Injectable } from '@angular/core';
import { Podcast } from '../../../interface/podcast'; 

@Injectable({
  providedIn: 'root',
})
export class PodcastListService {
  private podcasts: Podcast[] = [
    { id: 1, title: 'The Daily', host: 'Michael Barbaro', genre: 'News', episodes: 1500, releaseYear: 2017 },
    { id: 2, title: 'Reply All', host: 'Alex Goldman & PJ Vogt', genre: 'Technology', episodes: 200, releaseYear: 2014 },
    { id: 3, title: 'How I Built This', host: 'Guy Raz', genre: 'Business', episodes: 300, releaseYear: 2016 },
  ];

  getPodcasts(): Podcast[] {
    return this.podcasts;
  }

  addPodcast(podcast: Podcast): void {
    this.podcasts.push(podcast);
  }

  removePodcast(id: number): void {
    this.podcasts = this.podcasts.filter(podcast => podcast.id !== id);
  }

  clearPodcasts(): void {
    this.podcasts = [];
  }
}
