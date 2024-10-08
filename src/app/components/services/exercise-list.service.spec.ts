import { TestBed } from '@angular/core/testing';

import { ExerciseListService } from './exercise-list.service'; 

describe('ExerciseListService', () => {
  let service: ExerciseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
