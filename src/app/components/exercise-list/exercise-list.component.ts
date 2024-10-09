import { Component } from '@angular/core';
import { ExerciseListService } from '../services/exercise-list.service';
import { Exercise } from '../../../interface/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent {
  newExercise: Exercise = { id: 0, name: '', category: '', duration: 0, intensity: '' };
  exerciseList: Exercise[] = [];

  constructor(private exerciseService: ExerciseListService) {
    this.exerciseList = this.exerciseService.getExercises(); 
  }

  addExercise() {
    if (
      this.newExercise.name.trim() &&
      this.newExercise.category.trim() &&
      this.newExercise.duration > 0 &&
      this.newExercise.intensity.trim()
    ) {
      const newId = this.exerciseList.length
        ? this.exerciseList[this.exerciseList.length - 1].id + 1
        : 1;
      const exerciseToAdd: Exercise = { ...this.newExercise, id: newId };

      this.exerciseService.addExercise(exerciseToAdd);
      this.newExercise = { id: 0, name: '', category: '', duration: 0, intensity: '' }; 
      this.exerciseList = this.exerciseService.getExercises(); 
    }
  }

  removeExercise(id: number) {
    this.exerciseService.removeExercise(id);
    this.exerciseList = this.exerciseService.getExercises(); 
  }

  clearExercises() {
    this.exerciseService.clearExercises();
    this.exerciseList = this.exerciseService.getExercises(); 
  }
}

