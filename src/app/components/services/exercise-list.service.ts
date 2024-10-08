import { Injectable } from '@angular/core';
import { Exercise } from '../../../interface/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseListService {
  private exercises: Exercise[] = [
    { id: 1, name: 'Push-Ups', category: 'Strength', duration: 10, intensity: 'Medium' },
    { id: 2, name: 'Running', category: 'Cardio', duration: 30, intensity: 'High' },
    { id: 3, name: 'Yoga', category: 'Flexibility', duration: 60, intensity: 'Low' },
  ];

  getExercises(): Exercise[] {
    return this.exercises;
  }

  addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);
  }

  removeExercise(id: number): void {
    this.exercises = this.exercises.filter(exercise => exercise.id !== id);
  }

  clearExercises(): void {
    this.exercises = [];
  }
}
