import { TestBed } from '@angular/core/testing';

import { FoodMenuService } from './food-menu.service';

describe('FoodMenuService', () => {
  let service: FoodMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
