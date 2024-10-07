import { TestBed } from '@angular/core/testing';

import { DestinationListService } from './destination-list.service';

describe('DestinationListService', () => {
  let service: DestinationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
