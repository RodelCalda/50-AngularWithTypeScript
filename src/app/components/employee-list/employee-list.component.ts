import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList: string[] = []; 
  employeeName: string = '';   


  addEmployee() {
    if (this.employeeName) { 
      this.employeeList.push(this.employeeName);
      this.employeeName = ''; 
    }
  }
}
