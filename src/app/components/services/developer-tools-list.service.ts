import { Injectable } from '@angular/core';
import { DeveloperTool } from '../../../interface/developer-tool'; 

@Injectable({
  providedIn: 'root'
})
export class DeveloperToolsListService {
  private tools: DeveloperTool[] = [
    { id: 1, name: 'Visual Studio Code', category: 'IDE', description: 'A source-code editor made by Microsoft.' },
    { id: 2, name: 'Git', category: 'Version Control', description: 'A distributed version control system.' }
  ];

 
  getTools(): DeveloperTool[] {
    return this.tools;
  }

  
  addTool(tool: DeveloperTool): void {
    this.tools.push(tool);
  }

 
  removeTool(id: number): void {
    this.tools = this.tools.filter(tool => tool.id !== id);
  }

 
  clearTools(): void {
    this.tools = [];
  }
}
