import { Injectable } from '@angular/core';
import { Presentation } from '../../../../interface/presentation'; 

@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
  private presentations: Presentation[] = [
    { id: 1, title: 'Angular Basics', topic: 'Frontend Frameworks', presenter: 'John Doe', date: '2024-10-01' },
    { id: 2, title: 'TypeScript Deep Dive', topic: 'Programming Languages', presenter: 'Jane Smith', date: '2024-10-05' }
  ];

 
  getPresentations(): Presentation[] {
    return this.presentations;
  }

  
  addPresentation(presentation: Presentation): void {
    this.presentations.push(presentation);
  }

  
  removePresentation(id: number): void {
    this.presentations = this.presentations.filter(p => p.id !== id);
  }

 
  clearPresentations(): void {
    this.presentations = [];
  }
}
