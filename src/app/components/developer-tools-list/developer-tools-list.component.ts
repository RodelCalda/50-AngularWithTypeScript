import { Component } from '@angular/core';
import { DeveloperToolsListService } from '../services/developer-tools-list.service'; 
import { DeveloperTool } from '../../../interface/developer-tool';

@Component({
  selector: 'app-developer-tool-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css'],
})
export class DeveloperToolListComponent {
  newTool: DeveloperTool = { id: 0, name: '', category: '', description: '' };
  toolList: DeveloperTool[] = [];

  constructor(private toolService: DeveloperToolsListService) {
    this.toolList = this.toolService.getTools(); 
  }

  addTool() {
    if (
      this.newTool.name.trim() &&
      this.newTool.category.trim() &&
      this.newTool.description.trim()
    ) {
      const newId = this.toolList.length
        ? this.toolList[this.toolList.length - 1].id + 1
        : 1;
      const toolToAdd: DeveloperTool = { ...this.newTool, id: newId };

      this.toolService.addTool(toolToAdd);
      this.newTool = { id: 0, name: '', category: '', description: '' }; 
      this.toolList = this.toolService.getTools(); 
    }
  }

  removeTool(id: number) {
    this.toolService.removeTool(id);
    this.toolList = this.toolService.getTools(); 
  }

  clearTools() {
    this.toolService.clearTools(); 
    this.toolList = this.toolService.getTools(); 
  }
}
