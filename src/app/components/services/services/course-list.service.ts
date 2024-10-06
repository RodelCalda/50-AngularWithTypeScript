import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  private courseList: string[] = ['Mathematics', 'Science', 'History'];

  constructor() {}

  getCourses(): string[] {
    return this.courseList;
  }

  addCourse(course: string) {
    this.courseList.push(course);
  }

  removeCourse(course: string) {
    this.courseList = this.courseList.filter(item => item !== course);
  }
}
