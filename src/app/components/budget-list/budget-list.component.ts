import { Component } from '@angular/core';
import { BudgetListService } from '../services/budget-list.service';
import { Budget } from '../../../interface/budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent {
  newBudget: Budget = { id: 0, category: '', amount: 0, date: '' };
  budgetList: Budget[] = [];

  constructor(private budgetService: BudgetListService) {
    this.budgetList = this.budgetService.getBudgets(); 
  }

  addBudget() {
    if (this.newBudget.category.trim() && this.newBudget.amount > 0 && this.newBudget.date.trim()) {
      const newId = this.budgetList.length ? this.budgetList[this.budgetList.length - 1].id + 1 : 1;
      const budgetToAdd: Budget = { ...this.newBudget, id: newId };

      this.budgetService.addBudget(budgetToAdd);
      this.newBudget = { id: 0, category: '', amount: 0, date: '' }; 
      this.budgetList = this.budgetService.getBudgets();
    }
  }

  removeBudget(id: number) {
    this.budgetService.removeBudget(id);
    this.budgetList = this.budgetService.getBudgets(); 
  }

  clearBudgets() {
    this.budgetService.clearBudgets(); 
    this.budgetList = this.budgetService.getBudgets();
  }
}
