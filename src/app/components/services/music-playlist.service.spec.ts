import { TestBed } from '@angular/core/testing';

import { MusicPlaylistService } from './music-playlist.service';

describe('MusicPlaylistService', () => {
  let service: MusicPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
