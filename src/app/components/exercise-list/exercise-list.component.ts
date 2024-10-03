import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {

  exerciseList: string[] = [
    'Push-ups',
    'Squats',
    'Lunges',
    'Plank',
    'Burpees',
    'Mountain Climbers',
    'Jumping Jacks',
    'Bicep Curls'
  ];

  exerciseName: string = '';

  
  addExercise() {
    if (this.exerciseName) { 
      this.exerciseList.push(this.exerciseName);
      this.exerciseName = '';
    }
  }
}

