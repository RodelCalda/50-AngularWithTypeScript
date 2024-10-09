import { Component } from '@angular/core';
import { ComposerListService } from '../services/composer-list.service';
import { Composer } from '../../../interface/composer';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent {
  newComposer: Composer = { id: 0, name: '', era: '', nationality: '', famousWorks: [] };
  composerList: Composer[] = [];

  constructor(private composerService: ComposerListService) {
    this.composerList = this.composerService.getComposers();
  }

  addComposer() {
    if (
      this.newComposer.name.trim() &&
      this.newComposer.era.trim() &&
      this.newComposer.nationality.trim() &&
      this.newComposer.famousWorks.length > 0
    ) {
      const newId = this.composerList.length
        ? this.composerList[this.composerList.length - 1].id + 1
        : 1;
      const composerToAdd: Composer = { ...this.newComposer, id: newId };

      this.composerService.addComposer(composerToAdd);
      this.newComposer = { id: 0, name: '', era: '', nationality: '', famousWorks: [] }; 
      this.composerList = this.composerService.getComposers(); 
    }
  }

  removeComposer(id: number) {
    this.composerService.removeComposer(id);
    this.composerList = this.composerService.getComposers(); 
  }

  clearComposers() {
    this.composerService.clearComposers();
    this.composerList = this.composerService.getComposers(); 
  }
}
