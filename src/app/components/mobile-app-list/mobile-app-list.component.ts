import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrls: ['./mobile-app-list.component.css']
})
export class MobileAppListComponent {
  appList: string[] = [
    'Facebook',
    'Instagram',
    'Twitter',
    'WhatsApp',
    'YouTube',
    'TikTok',
    'Spotify',
    'Snapchat',
    'Zoom',
    'Netflix'
  ]; 
  appName: string = '';

  
  addApp() {
    if (this.appName) { 
      this.appList.push(this.appName);
      this.appName = '';
    }
  }
}

