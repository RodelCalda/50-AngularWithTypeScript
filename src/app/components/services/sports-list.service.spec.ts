import { TestBed } from '@angular/core/testing';

import { SportsListService } from './sports-list.service';

describe('SportsListService', () => {
  let service: SportsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
