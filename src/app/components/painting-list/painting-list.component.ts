import { Component } from '@angular/core';
import { PaintingListService } from '../services/painting-list.service';
import { Painting } from '../../../interface/painting'; 

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css'],
})
export class PaintingListComponent {
  newPainting: Painting = { id: 0, title: '', artist: '', year: 0, style: '' };
  paintingList: Painting[] = [];

  constructor(private paintingService: PaintingListService) {
    this.paintingList = this.paintingService.getPaintings(); 
  }

  addPainting() {
    if (this.newPainting.title.trim() && this.newPainting.artist.trim() && this.newPainting.year > 0 && this.newPainting.style.trim()) {
      const newId = this.paintingList.length ? this.paintingList[this.paintingList.length - 1].id + 1 : 1;
      const paintingToAdd: Painting = { ...this.newPainting, id: newId };

      this.paintingService.addPainting(paintingToAdd);
      this.newPainting = { id: 0, title: '', artist: '', year: 0, style: '' }; 
      this.paintingList = this.paintingService.getPaintings(); 
    }
  }

  removePainting(id: number) {
    this.paintingService.removePainting(id);
    this.paintingList = this.paintingService.getPaintings(); 
  }

  clearPaintings() {
    this.paintingService.clearPaintings(); 
    this.paintingList = this.paintingService.getPaintings(); 
  }
}
