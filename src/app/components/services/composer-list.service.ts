import { Injectable } from '@angular/core';
import { Composer } from '../../../interface/composer'; 
@Injectable({
  providedIn: 'root',
})
export class ComposerListService {
  private composers: Composer[] = [
    { id: 1, name: 'Ludwig van Beethoven', era: 'Classical', nationality: 'German', famousWorks: ['Symphony No. 9', 'Fur Elise'] },
    { id: 2, name: 'Wolfgang Amadeus Mozart', era: 'Classical', nationality: 'Austrian', famousWorks: ['The Magic Flute', 'Requiem'] },
    { id: 3, name: 'Johann Sebastian Bach', era: 'Baroque', nationality: 'German', famousWorks: ['Toccata and Fugue in D minor', 'Brandenburg Concertos'] },
  ];

  getComposers(): Composer[] {
    return this.composers;
  }

  addComposer(composer: Composer): void {
    this.composers.push(composer);
  }

  removeComposer(id: number): void {
    this.composers = this.composers.filter(composer => composer.id !== id);
  }

  clearComposers(): void {
    this.composers = [];
  }
}
