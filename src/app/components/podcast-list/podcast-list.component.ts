import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent {
  podcastList: string[] = [
    'Wake Up with Jim & Saab - Episode 1: Relationships',
    'Boiling Waters - Episode 12: The Friend Zone',
    'The Linya-Linya Show - Episode 8: The Filipino Culture',
    'The Eavesdrop Podcast - Episode 3: Motherhood and Friendship',
    'Ang Walang Kwentang Podcast - Episode 5: Adulting Challenges'
  ];

  podcastName: string = '';

  addPodcast() {
    if (this.podcastName) { 
      this.podcastList.push(this.podcastName);
      this.podcastName = '';
    }
  }
}
