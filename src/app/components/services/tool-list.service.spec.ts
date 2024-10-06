import { TestBed } from '@angular/core/testing';

import { ToolListService } from './tool-list.service';

describe('ToolListService', () => {
  let service: ToolListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
