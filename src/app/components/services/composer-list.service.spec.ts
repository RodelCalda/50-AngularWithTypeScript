import { TestBed } from '@angular/core/testing';

import { ComposerListService } from './composer-list.service';

describe('ComposerListService', () => {
  let service: ComposerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
