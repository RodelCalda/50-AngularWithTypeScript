import { Component } from '@angular/core';
import { StudentListService } from '../services/student.service'; 
import { Student } from '../../../interface/stundet-list'; 

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  newStudent: Student = { id: 0, name: '', section: '', age: 0 };
  studentList: Student[] = [];

  constructor(private studentService: StudentListService) {
    this.studentList = this.studentService.getStudents(); 
  }

  addStudent() {
    if (this.newStudent.name.trim() && this.newStudent.section.trim() && this.newStudent.age > 0) {
      const newId = this.studentList.length ? this.studentList[this.studentList.length - 1].id + 1 : 1;
      const studentToAdd: Student = { ...this.newStudent, id: newId };
      
      this.studentService.addStudent(studentToAdd);
      this.newStudent = { id: 0, name: '', section: '', age: 0 }; 
      this.studentList = this.studentService.getStudents(); 
    }
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);
    this.studentList = this.studentService.getStudents(); 
  }

  clearStudent() {
    this.studentService.clearStudents(); 
    this.studentList = this.studentService.getStudents(); 
  }
}



