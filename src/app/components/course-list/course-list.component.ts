// src/app/components/course-list/course-list.component.ts
import { Component } from '@angular/core';
import { CourseListService } from '../services/services/course-list.service'; 
import { Course } from '../../../interface/course'; 

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  newCourse: Course = { id: 0, title: '', description: '', duration: '' };
  courseList: Course[] = [];

  constructor(private courseService: CourseListService) {
    this.courseList = this.courseService.getCourses();
  }

  addCourse() {
    if (this.newCourse.title.trim() && this.newCourse.description.trim() && this.newCourse.duration.trim()) {
      const newId = this.courseList.length ? this.courseList[this.courseList.length - 1].id + 1 : 1;
      const courseToAdd: Course = { ...this.newCourse, id: newId };
      
      this.courseService.addCourse(courseToAdd);
      this.newCourse = { id: 0, title: '', description: '', duration: '' }; 
      this.courseList = this.courseService.getCourses(); 
    }
  }

  removeCourse(id: number) {
    this.courseService.removeCourse(id);
    this.courseList = this.courseService.getCourses();
  }

  clearCourses() {
    this.courseService.clearCourses(); 
    this.courseList = this.courseService.getCourses(); 
  }
}

