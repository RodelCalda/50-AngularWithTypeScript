import { Component } from '@angular/core';
import { PresentationListService } from '../services/services/presentation-list.service';
import { Presentation } from '../../../interface/presentation';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent {
  newPresentation: Presentation = { id: 0, title: '', topic: '', presenter: '', date: '' };
  presentationList: Presentation[] = [];

  constructor(private presentationService: PresentationListService) {
    this.presentationList = this.presentationService.getPresentations(); 
  }

  addPresentation() {
    if (this.newPresentation.title.trim() && this.newPresentation.topic.trim() && this.newPresentation.presenter.trim() && this.newPresentation.date.trim()) {
      const newId = this.presentationList.length ? this.presentationList[this.presentationList.length - 1].id + 1 : 1;
      const presentationToAdd: Presentation = { ...this.newPresentation, id: newId };

      this.presentationService.addPresentation(presentationToAdd);
      this.newPresentation = { id: 0, title: '', topic: '', presenter: '', date: '' }; 
      this.presentationList = this.presentationService.getPresentations(); 
    }
  }

  removePresentation(id: number) {
    this.presentationService.removePresentation(id);
    this.presentationList = this.presentationService.getPresentations(); 
  }

  clearPresentations() {
    this.presentationService.clearPresentations(); 
    this.presentationList = this.presentationService.getPresentations();
  }
}
