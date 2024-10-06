import { TestBed } from '@angular/core/testing';

import { VideoGameListService } from './video-game-list.service'; 

describe('VideoGameListService', () => {
  let service: VideoGameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
