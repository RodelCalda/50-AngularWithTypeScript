import { Component } from '@angular/core';
import { ClassroomListService } from '../services/classroom-list.service'; 
import { Classroom } from '../../../interface/classroom'; 
@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css'],
})
export class ClassroomListComponent {
  newClassroom: Classroom = { id: 0, name: '', capacity: 0, location: '' };
  classroomList: Classroom[] = [];

  constructor(private classroomListService: ClassroomListService) {
    this.classroomList = this.classroomListService.getClassrooms(); 
  }

  addClassroom() {
    if (this.newClassroom.name.trim() && this.newClassroom.capacity > 0 && this.newClassroom.location.trim()) {
      const newId = this.classroomList.length ? this.classroomList[this.classroomList.length - 1].id + 1 : 1;
      const classroomToAdd: Classroom = { ...this.newClassroom, id: newId };

      this.classroomListService.addClassroom(classroomToAdd);
      this.newClassroom = { id: 0, name: '', capacity: 0, location: '' }; 
      this.classroomList = this.classroomListService.getClassrooms(); 
    }
  }

  removeClassroom(id: number) {
    this.classroomListService.removeClassroom(id);
    this.classroomList = this.classroomListService.getClassrooms(); 
  }

  clearClassrooms() {
    this.classroomListService.clearClassrooms(); 
    this.classroomList = this.classroomListService.getClassrooms(); 
  }
}
