import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent {
 
  presentationList: string[] = [];
  
  presentationTopic: string = '';

 
  addPresentation() {
    if (this.presentationTopic) { 
      this.presentationList.push(this.presentationTopic);
      this.presentationTopic = ''; 
    }
  }
}
