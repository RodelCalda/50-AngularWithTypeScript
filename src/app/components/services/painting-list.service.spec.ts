import { TestBed } from '@angular/core/testing';

import { PaintingListService } from './painting-list.service';

describe('PaintingListService', () => {
  let service: PaintingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
