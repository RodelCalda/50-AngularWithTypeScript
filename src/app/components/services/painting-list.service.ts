import { Injectable } from '@angular/core';
import { Painting } from '../../../interface/painting'; 

@Injectable({
  providedIn: 'root',
})
export class PaintingListService {
  private paintings: Painting[] = [
    { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', year: 1889, style: 'Post-Impressionism' },
    { id: 2, title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503, style: 'Renaissance' },
    { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931, style: 'Surrealism' },
  ];

  getPaintings(): Painting[] {
    return this.paintings;
  }

  addPainting(painting: Painting): void {
    this.paintings.push(painting);
  }

  removePainting(id: number): void {
    this.paintings = this.paintings.filter(painting => painting.id !== id);
  }

  clearPaintings(): void {
    this.paintings = [];
  }
}
