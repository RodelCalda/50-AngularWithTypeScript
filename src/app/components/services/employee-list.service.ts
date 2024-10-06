// src/app/services/employee-list.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../../../interface/employee'; 

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  private employees: Employee[] = [
    { id: 1, name: 'Alice Johnson', position: 'Software Engineer', age: 30 },
    { id: 2, name: 'Bob Smith', position: 'Project Manager', age: 35 },
    { id: 3, name: 'Charlie Brown', position: 'Designer', age: 28 },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(id: number): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }

  clearEmployees(): void {
    this.employees = [];
  }
}

