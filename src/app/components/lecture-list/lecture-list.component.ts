import { Component } from '@angular/core';
import { LectureListService } from '../services/lecture-list.service';
import { Lecture } from '../../../interface/lecture';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css'],
})
export class LectureListComponent {
  newLecture: Lecture = { id: 0, title: '', speaker: '', date: new Date(), duration: 0 };
  lectureList: Lecture[] = [];

  constructor(private lectureService: LectureListService) {
    this.lectureList = this.lectureService.getLectures(); 
  }

  addLecture() {
    if (this.newLecture.title.trim() && this.newLecture.speaker.trim() && this.newLecture.duration > 0) {
      const newId = this.lectureList.length ? this.lectureList[this.lectureList.length - 1].id + 1 : 1;
      const lectureToAdd: Lecture = { ...this.newLecture, id: newId };

      this.lectureService.addLecture(lectureToAdd);
      this.newLecture = { id: 0, title: '', speaker: '', date: new Date(), duration: 0 }; 
      this.lectureList = this.lectureService.getLectures(); 
    }
  }

  removeLecture(id: number) {
    this.lectureService.removeLecture(id);
    this.lectureList = this.lectureService.getLectures(); 
  }

  clearLectures() {
    this.lectureService.clearLectures(); 
    this.lectureList = this.lectureService.getLectures(); 
  }
}
