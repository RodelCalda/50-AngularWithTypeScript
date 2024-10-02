import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  tvShowList: string[] = [
    'Ang Probinsyano',
    'It’s Showtime',
    'Kapuso Mo, Jessica Soho',
    'Eat Bulaga!',
    'Paano Kita Mapasasalamatan',
    'ASAP Natin ‘To',
    'Tawag ng Tanghalan',
    'Pinoy Big Brother',
    'The Voice Philippines',
    'Your Face Sounds Familiar'
  ]; 
  tvShowName: string = '';

  addTvShow() {
    if (this.tvShowName) {
      this.tvShowList.push(this.tvShowName);
      this.tvShowName = ''; 
    }
  }
}
