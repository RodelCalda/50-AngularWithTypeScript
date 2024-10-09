import { Component } from '@angular/core';
import { FrameworkListService } from '../services/framework-list.service';
import { Framework } from '../../../interface/framework';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css'],
})
export class FrameworkListComponent {
  newFramework: Framework = { id: 0, name: '', language: '', description: '' };
  frameworkList: Framework[] = [];

  constructor(private frameworkService: FrameworkListService) {
    this.frameworkList = this.frameworkService.getFrameworks(); 
  }

  addFramework() {
    if (
      this.newFramework.name.trim() &&
      this.newFramework.language.trim() &&
      this.newFramework.description.trim()
    ) {
      const newId = this.frameworkList.length
        ? this.frameworkList[this.frameworkList.length - 1].id + 1
        : 1;
      const frameworkToAdd: Framework = { ...this.newFramework, id: newId };

      this.frameworkService.addFramework(frameworkToAdd);
      this.newFramework = { id: 0, name: '', language: '', description: '' }; 
      this.frameworkList = this.frameworkService.getFrameworks(); 
    }
  }

  removeFramework(id: number) {
    this.frameworkService.removeFramework(id);
    this.frameworkList = this.frameworkService.getFrameworks(); 
  }

  clearFrameworks() {
    this.frameworkService.clearFrameworks(); 
    this.frameworkList = this.frameworkService.getFrameworks(); 
  }
}
