import { TestBed } from '@angular/core/testing';

import { PresentationListService } from './presentation-list.service';

describe('PresentationListService', () => {
  let service: PresentationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
