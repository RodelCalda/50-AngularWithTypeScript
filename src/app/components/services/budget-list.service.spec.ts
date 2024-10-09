import { TestBed } from '@angular/core/testing';

import { BudgetListService } from './budget-list.service';

describe('BudgetListService', () => {
  let service: BudgetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
