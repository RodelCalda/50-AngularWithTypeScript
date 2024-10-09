import { Injectable } from '@angular/core';
import { Budget } from '../../../interface/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetListService {
  private budgets: Budget[] = [
    { id: 1, category: 'Groceries', amount: 150, date: '2024-10-01' },
    { id: 2, category: 'Rent', amount: 1000, date: '2024-10-05' },
    { id: 3, category: 'Entertainment', amount: 200, date: '2024-10-10' }
  ];

  
  getBudgets(): Budget[] {
    return this.budgets;
  }


  addBudget(budget: Budget): void {
    this.budgets.push(budget);
  }

  removeBudget(id: number): void {
    this.budgets = this.budgets.filter(budget => budget.id !== id);
  }

 
  clearBudgets(): void {
    this.budgets = [];
  }
}
