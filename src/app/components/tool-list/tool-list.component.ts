import { Component } from '@angular/core';
import { ToolListService } from '../services/tool-list.service';
import { Tool } from '../../../interface/tool';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
})
export class ToolListComponent {
  newTool: Tool = { id: 0, name: '', type: '', brand: '', price: 0 };
  toolList: Tool[] = [];

  constructor(private toolService: ToolListService) {
    this.toolList = this.toolService.getTools();
  }

  addTool() {
    if (this.newTool.name.trim() && this.newTool.type.trim() && this.newTool.brand.trim() && this.newTool.price > 0) {
      const newId = this.toolList.length ? this.toolList[this.toolList.length - 1].id + 1 : 1;
      const toolToAdd: Tool = { ...this.newTool, id: newId };

      this.toolService.addTool(toolToAdd);
      this.newTool = { id: 0, name: '', type: '', brand: '', price: 0 }; 
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

