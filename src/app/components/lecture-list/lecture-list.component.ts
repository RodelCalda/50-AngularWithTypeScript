import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {
  lectureList: string[] = [
    'Introduction to Programming',
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Web Development',
    'Software Engineering',
    'Operating Systems',
    'Computer Networks',
    'Mobile Application Development',
    'Human-Computer Interaction',
    'Cloud Computing'
  ]; 
  lectureName: string = '';


  addLecture() {
    if (this.lectureName) { 
      this.lectureList.push(this.lectureName);
      this.lectureName = '';
    }
  }
}
