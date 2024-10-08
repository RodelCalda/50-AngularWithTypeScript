import { Component } from '@angular/core';
import { SubjectListService } from '../services/services/subject-list.service'; 
import { Subject } from '../../../interface/subject'; 

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent {
  newSubject: Subject = { id: 0, name: '', code: '' };
  subjectList: Subject[] = [];

  constructor(private subjectService: SubjectListService) {
    this.subjectList = this.subjectService.getSubjects(); 
  }

  addSubject() {
    if (this.newSubject.name.trim() && this.newSubject.code.trim()) {
      const newId = this.subjectList.length ? this.subjectList[this.subjectList.length - 1].id + 1 : 1;
      const subjectToAdd: Subject = { ...this.newSubject, id: newId };

      this.subjectService.addSubject(subjectToAdd);
      this.newSubject = { id: 0, name: '', code: '' }; 
      this.subjectList = this.subjectService.getSubjects(); 
    }
  }

  removeSubject(id: number) {
    this.subjectService.removeSubject(id);
    this.subjectList = this.subjectService.getSubjects();
  }

  clearSubjects() {
    this.subjectService.clearSubjects(); 
    this.subjectList = this.subjectService.getSubjects(); 
  }
}