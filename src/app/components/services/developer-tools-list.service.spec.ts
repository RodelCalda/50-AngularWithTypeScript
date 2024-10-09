import { TestBed } from '@angular/core/testing';

import { DeveloperToolsListService } from './developer-tools-list.service';

describe('DeveloperToolsListService', () => {
  let service: DeveloperToolsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperToolsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
