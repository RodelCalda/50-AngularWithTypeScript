import { TestBed } from '@angular/core/testing';

import { StationeryListService } from './stationery-list.service';

describe('StationeryListService', () => {
  let service: StationeryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationeryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
