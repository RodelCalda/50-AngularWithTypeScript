import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent {
  softwareList: string[] = [
    'Microsoft Office',
    'Google Chrome',
    'Adobe Photoshop',
    'Visual Studio Code',
    'Zoom',
    'Skype',
    'Mozilla Firefox',
    'Node.js',
    'Python',
    'Git',
    'Docker',
    'Spotify',
    'Dropbox'
  ]; 
  softwareName: string = ''; 

  addSoftware() {
    if (this.softwareName) { 
      this.softwareList.push(this.softwareName);
      this.softwareName = ''; 
    }
  }
}
