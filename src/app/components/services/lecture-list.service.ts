import { Injectable } from '@angular/core';
import { Lecture } from '../../../interface/lecture'; 

@Injectable({
  providedIn: 'root',
})
export class LectureListService {
  private lectures: Lecture[] = [
    { id: 1, title: 'Introduction to Angular', speaker: 'John Doe', date: new Date('2024-10-10'), duration: 60 },
    { id: 2, title: 'Advanced TypeScript', speaker: 'Jane Smith', date: new Date('2024-10-15'), duration: 90 },
   
  ];

  getLectures(): Lecture[] {
    return this.lectures;
  }

  addLecture(lecture: Lecture): void {
    this.lectures.push(lecture);
  }

  removeLecture(id: number): void {
    this.lectures = this.lectures.filter(lecture => lecture.id !== id);
  }

  clearLectures(): void {
    this.lectures = [];
  }
}