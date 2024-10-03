import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent {
  budgetList: { name: string; amount: number }[] = [];
  budgetItem: string = '';
  budgetAmount: number | null = null;

  
  addBudget() {
    if (this.budgetItem && this.budgetAmount !== null) {
      this.budgetList.push({ name: this.budgetItem, amount: this.budgetAmount });
      this.budgetItem = ''; 
      this.budgetAmount = null; 
    }
  }
}
