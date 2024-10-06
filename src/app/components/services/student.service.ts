import { Injectable } from '@angular/core';
import { Student } from '../../../interface/stundet-list'; 

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', section: 'A', age: 20 },
    { id: 2, name: 'Jane Smith', section: 'B', age: 22 }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  removeStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  clearStudents(): void {
    this.students = [];
  }
}


