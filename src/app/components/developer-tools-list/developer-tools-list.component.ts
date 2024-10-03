import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css']
})
export class DeveloperToolsListComponent {
 
  toolsList: string[] = [];
  
  toolName: string = '';

  
  addTool() {
    if (this.toolName) { 
      this.toolsList.push(this.toolName);
      this.toolName = '';
    }
  }
}

