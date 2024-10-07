import { TestBed } from '@angular/core/testing';

import { LaptopListService } from './laptop-list.service';

describe('LaptopListService', () => {
  let service: LaptopListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
