import { TestBed } from '@angular/core/testing';

import { VegetableListService } from './vegetable-list.service';

describe('VegetableListService', () => {
  let service: VegetableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
