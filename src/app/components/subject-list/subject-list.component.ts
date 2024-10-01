import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  subjectList: string[] = ["SIA-101" , "EVENT DRIVEN"]; 
  subjectName: string = '';    

  
  addSubject() {
    if (this.subjectName) { 
      this.subjectList.push(this.subjectName);
      this.subjectName = ''; 
    }
  }
}
