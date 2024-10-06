import { TestBed } from '@angular/core/testing';

import { LectureListService } from './lecture-list.service';

describe('LectureListService', () => {
  let service: LectureListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectureListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
