
import { Injectable } from '@angular/core';
import { Course } from '../../../../interface/course'; 

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  private courses: Course[] = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular', duration: '4 weeks' },
    { id: 2, title: 'TypeScript Deep Dive', description: 'Advanced TypeScript concepts', duration: '3 weeks' },
    { id: 3, title: 'RxJS for Reactive Programming', description: 'Understanding RxJS', duration: '5 weeks' },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  clearCourses(): void {
    this.courses = [];
  }
}
