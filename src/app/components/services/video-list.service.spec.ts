import { TestBed } from '@angular/core/testing';

import { VideoListService } from './video-list.service';

describe('VideoListService', () => {
  let service: VideoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
