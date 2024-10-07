import { TestBed } from '@angular/core/testing';

import { LaptopSpecificationsService } from './laptop-specifications.service';

describe('LaptopSpecificationsService', () => {
  let service: LaptopSpecificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopSpecificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
