import { Component } from '@angular/core';
import { TVShowListService } from '../services/tv-show-list.service';
import { TVShow } from '../../../interface/tv-show';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TVShowListComponent {
  // Initialize new TV show object
  newTVShow: TVShow = { id: 0, title: '', genre: '', seasons: 0, releaseYear: 0 };

  // Array to store TV shows
  tvShowList: TVShow[] = [];

  constructor(private tvShowService: TVShowListService) {
    this.tvShowList = this.tvShowService.getTVShows(); // Load initial TV shows
  }

  addTVShow() {
    if (
      this.newTVShow.title.trim() &&
      this.newTVShow.genre.trim() &&
      this.newTVShow.seasons > 0 &&
      this.newTVShow.releaseYear > 0
    ) {
      const newId = this.tvShowList.length ? this.tvShowList[this.tvShowList.length - 1].id + 1 : 1;
      const tvShowToAdd: TVShow = { ...this.newTVShow, id: newId };

      this.tvShowService.addTVShow(tvShowToAdd);
      this.newTVShow = { id: 0, title: '', genre: '', seasons: 0, releaseYear: 0 }; // Reset the form
      this.tvShowList = this.tvShowService.getTVShows(); // Refresh the list
    }
  }

  removeTVShow(id: number) {
    this.tvShowService.removeTVShow(id);
    this.tvShowList = this.tvShowService.getTVShows(); // Refresh the list
  }

  clearTVShows() {
    this.tvShowService.clearTVShows(); // Clear all TV shows
    this.tvShowList = this.tvShowService.getTVShows(); // Refresh the list
  }
}
