import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css']
})
export class FrameworkListComponent {
  
  frameworksList: string[] = [];
  
  frameworkName: string = '';

 
  addFramework() {
    if (this.frameworkName) { 
      this.frameworksList.push(this.frameworkName);
      this.frameworkName = ''; 
    }
  }
}

