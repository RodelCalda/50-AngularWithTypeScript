import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent {
  toolList: string[] = [
    'Hammer',
    'Screwdriver',
    'Wrench',
    'Pliers',
    'Drill',
    'Measuring Tape',
    'Saw',
    'Chisel',
    'Level',
    'Utility Knife',
    'Clamp',
    'Sander',
    'Allen Key',
    'Wire Cutter',
    'Socket Wrench'
  ]; 
  toolName: string = ''; 

 
  addTool() {
    if (this.toolName) { 
      this.toolList.push(this.toolName);
      this.toolName = ''; 
    }
  }
}

