import { TestBed } from '@angular/core/testing';

import { SubjectListService } from './subject-list.service';

describe('SubjectListService', () => {
  let service: SubjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
