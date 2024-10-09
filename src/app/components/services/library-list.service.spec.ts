import { TestBed } from '@angular/core/testing';

import { LibraryListService } from './library-list.service';

describe('LibraryListService', () => {
  let service: LibraryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
