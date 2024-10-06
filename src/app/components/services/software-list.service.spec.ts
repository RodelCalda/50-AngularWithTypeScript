import { TestBed } from '@angular/core/testing';

import { SoftwareListService } from './software-list.service';

describe('SoftwareListService', () => {
  let service: SoftwareListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
