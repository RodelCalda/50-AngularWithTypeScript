import { Component } from '@angular/core';
import { MealPlanListService } from '../services/meal-plan-list.service';
import { MealPlan } from '../../../interface/meal-plan';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css'],
})
export class MealPlanListComponent {
  newMealPlan: MealPlan = { id: 0, name: '', day: '', meals: [] };
  mealPlanList: MealPlan[] = [];
  
  mealsInput: string = '';

  constructor(private mealPlanService: MealPlanListService) {
    this.mealPlanList = this.mealPlanService.getMealPlans();
  }

  addMealPlan() {
    if (this.newMealPlan.name.trim() && this.newMealPlan.day.trim() && this.mealsInput.trim()) {
      const newId = this.mealPlanList.length
        ? this.mealPlanList[this.mealPlanList.length - 1].id + 1
        : 1;

     
      this.newMealPlan.meals = this.mealsInput.split(',').map(meal => meal.trim());

      const mealPlanToAdd: MealPlan = { ...this.newMealPlan, id: newId };

      this.mealPlanService.addMealPlan(mealPlanToAdd);
      this.newMealPlan = { id: 0, name: '', day: '', meals: [] }; 
      this.mealsInput = ''; 
      this.mealPlanList = this.mealPlanService.getMealPlans(); 
    }
  }

  removeMealPlan(id: number) {
    this.mealPlanService.removeMealPlan(id);
    this.mealPlanList = this.mealPlanService.getMealPlans(); 
  }

  clearMealPlans() {
    this.mealPlanService.clearMealPlans();
    this.mealPlanList = this.mealPlanService.getMealPlans(); 
  }
}
