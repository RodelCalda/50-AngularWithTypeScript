import { Injectable } from '@angular/core';
import { Classroom } from '../../../interface/classroom';

@Injectable({
  providedIn: 'root',
})
export class ClassroomListService {
  private classrooms: Classroom[] = [
    { id: 1, name: 'Physics Lab', capacity: 30, location: 'Building A' },
    { id: 2, name: 'Computer Science Lab', capacity: 25, location: 'Building B' },
  ];

  getClassrooms(): Classroom[] {
    return this.classrooms;
  }

  addClassroom(classroom: Classroom): void {
    this.classrooms.push(classroom);
  }

  removeClassroom(id: number): void {
    this.classrooms = this.classrooms.filter((classroom) => classroom.id !== id);
  }

  clearClassrooms(): void {
    this.classrooms = [];
  }
}