import { TestBed } from '@angular/core/testing';

import { PodcastListService } from './podcast-list.service';

describe('PodcastListService', () => {
  let service: PodcastListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
