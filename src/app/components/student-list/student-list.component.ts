import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  studentList: string[] = ["Lorenz", "Christine Jane" ];
  student: string = '';
  selectedItem: number | null = null;

  addStudent() {
    if(this.student) {
      this.studentList.push(this.student);
      this.student = '';  
    }
  }

}

