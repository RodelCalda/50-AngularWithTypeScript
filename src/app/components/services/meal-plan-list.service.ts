import { Injectable } from '@angular/core';
import { MealPlan } from '../../../interface/meal-plan';

@Injectable({
  providedIn: 'root',
})
export class MealPlanListService {
  private mealPlans: MealPlan[] = [
    { id: 1, name: 'Healthy Plan', day: 'Monday', meals: ['Oatmeal', 'Grilled Chicken Salad', 'Vegetable Stir Fry'] },
    { id: 2, name: 'High Protein Plan', day: 'Tuesday', meals: ['Scrambled Eggs', 'Steak and Broccoli', 'Chicken and Rice'] },
    { id: 3, name: 'Vegetarian Plan', day: 'Wednesday', meals: ['Fruit Smoothie', 'Vegetable Wrap', 'Tofu Stir Fry'] },
  ];

  getMealPlans(): MealPlan[] {
    return this.mealPlans;
  }

  addMealPlan(mealPlan: MealPlan): void {
    this.mealPlans.push(mealPlan);
  }

  removeMealPlan(id: number): void {
    this.mealPlans = this.mealPlans.filter(mealPlan => mealPlan.id !== id);
  }

  clearMealPlans(): void {
    this.mealPlans = [];
  }
}
