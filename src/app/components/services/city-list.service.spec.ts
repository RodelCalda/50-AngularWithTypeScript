import { TestBed } from '@angular/core/testing';

import { CityListService } from './city-list.service';

describe('CityListService', () => {
  let service: CityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
