import { TestBed } from '@angular/core/testing';

import { FrameworkListService } from './framework-list.service';

describe('FrameworkListService', () => {
  let service: FrameworkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
