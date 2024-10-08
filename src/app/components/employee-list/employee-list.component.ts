import { Component } from '@angular/core';
import { EmployeeListService } from '../services/employee-list.service';
import { Employee } from '../../../interface/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  newEmployee: Employee = { id: 0, name: '', position: '', age: 0 };
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeListService) {
    this.employeeList = this.employeeService.getEmployees();
  }

  addEmployee() {
    if (this.newEmployee.name.trim() && this.newEmployee.position.trim() && this.newEmployee.age > 0) {
      const newId = this.employeeList.length ? this.employeeList[this.employeeList.length - 1].id + 1 : 1;
      const employeeToAdd: Employee = { ...this.newEmployee, id: newId };
      
      this.employeeService.addEmployee(employeeToAdd);
      this.newEmployee = { id: 0, name: '', position: '', age: 0 }; 
      this.employeeList = this.employeeService.getEmployees(); 
    }
  }

  removeEmployee(id: number) {
    this.employeeService.removeEmployee(id);
    this.employeeList = this.employeeService.getEmployees(); 
  }

  clearEmployees() {
    this.employeeService.clearEmployees(); 
    this.employeeList = this.employeeService.getEmployees(); 
  }
}

