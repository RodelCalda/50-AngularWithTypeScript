import { Component } from '@angular/core';
import { PodcastListService } from '../services/podcast-list.service';
import { Podcast } from '../../../interface/podcast';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css'],
})
export class PodcastListComponent {
  newPodcast: Podcast = { id: 0, title: '', host: '', genre: '', episodes: 0, releaseYear: 0 };
  podcastList: Podcast[] = [];

  constructor(private podcastService: PodcastListService) {
    this.podcastList = this.podcastService.getPodcasts(); 
  }

  addPodcast() {
    if (
      this.newPodcast.title.trim() &&
      this.newPodcast.host.trim() &&
      this.newPodcast.genre.trim() &&
      this.newPodcast.episodes > 0 &&
      this.newPodcast.releaseYear > 0
    ) {
      const newId = this.podcastList.length
        ? this.podcastList[this.podcastList.length - 1].id + 1
        : 1;
      const podcastToAdd: Podcast = { ...this.newPodcast, id: newId };

      this.podcastService.addPodcast(podcastToAdd);
      this.newPodcast = { id: 0, title: '', host: '', genre: '', episodes: 0, releaseYear: 0 }; 
      this.podcastList = this.podcastService.getPodcasts(); 
    }
  }

  removePodcast(id: number) {
    this.podcastService.removePodcast(id);
    this.podcastList = this.podcastService.getPodcasts(); 
  }

  clearPodcasts() {
    this.podcastService.clearPodcasts();
    this.podcastList = this.podcastService.getPodcasts(); 
  }
}
