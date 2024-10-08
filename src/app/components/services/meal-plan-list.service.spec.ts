import { TestBed } from '@angular/core/testing';

import { MealPlanListService } from './meal-plan-list.service';

describe('MealPlanListService', () => {
  let service: MealPlanListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealPlanListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
