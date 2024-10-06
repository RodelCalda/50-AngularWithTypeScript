import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: string[] = ['Lorenz' , 'Christine'];

  constructor() {}

 
  addStudent(student: string): void {
    this.students.push(student);
  }

 
  getStudents(): string[] {
    return this.students;
  }

  
  clearStudents(): void {
    this.students = [];
  }
}

