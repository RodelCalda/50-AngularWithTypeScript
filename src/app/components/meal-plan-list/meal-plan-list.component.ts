import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css']
})
export class MealPlanListComponent {
  
  mealPlanList: string[] = [
    'Monday: Chicken Adobo',
    'Tuesday: Sinigang na Baboy',
    'Wednesday: Pancit Canton',
    'Thursday: Beef',
    'Friday: Fried Fish',
    'Saturday: Vegetable Kunwari',
    'Sunday: Lechon Kawali'
  ];

  mealName: string = '';

  
  addMeal() {
    if (this.mealName) {
      this.mealPlanList.push(this.mealName);
      this.mealName = ''; 
    }
  }
}

