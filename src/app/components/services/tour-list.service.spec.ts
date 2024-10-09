import { TestBed } from '@angular/core/testing';

import { TourListService } from './tour-list.service';

describe('TourListService', () => {
  let service: TourListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
