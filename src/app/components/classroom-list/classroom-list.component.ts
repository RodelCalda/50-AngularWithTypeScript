import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent {
  studentList: string[] = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'Sarah Brown',
    'David Wilson'
  ]; 
  studentName: string = '';

 
  addStudent() {
    if (this.studentName) {
      this.studentList.push(this.studentName);
      this.studentName = '';
    }
  }
}

