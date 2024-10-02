import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videoList: string[] = [
    'Introduction to Angular',
    'Getting Started with TypeScript',
    'JavaScript Basics',
    'Understanding OOP Concepts',
    'Angular Routing and Navigation',
    'Building a RESTful API',
    'Responsive Web Design with CSS',
    'Deploying Your Angular App',
    'Working with APIs in Angular',
    'Advanced JavaScript Techniques'
  ]; 
  videoTitle: string = '';

 
  addVideo() {
    if (this.videoTitle) {
      this.videoList.push(this.videoTitle);
      this.videoTitle = ''; 
    }
  }
}
