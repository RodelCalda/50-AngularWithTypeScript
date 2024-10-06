// src/app/services/subject-list.service.ts
import { Injectable } from '@angular/core';
import { Subject } from '../../../../interface/subject'; 

@Injectable({
  providedIn: 'root',
})
export class SubjectListService {
  private subjects: Subject[] = [
    { id: 1, name: 'Mathematics', code: 'MATH101' },
    { id: 2, name: 'Physics', code: 'PHYS101' },
    { id: 3, name: 'Chemistry', code: 'CHEM101' },
  ];

  getSubjects(): Subject[] {
    return this.subjects;
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  removeSubject(id: number): void {
    this.subjects = this.subjects.filter(subject => subject.id !== id);
  }

  clearSubjects(): void {
    this.subjects = [];
  }
}
