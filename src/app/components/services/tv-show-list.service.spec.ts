import { TestBed } from '@angular/core/testing';

import { TvShowListService } from './tv-show-list.service';

describe('TvShowListService', () => {
  let service: TvShowListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
