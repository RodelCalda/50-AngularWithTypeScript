import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  removeEmployee(id: number): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}

