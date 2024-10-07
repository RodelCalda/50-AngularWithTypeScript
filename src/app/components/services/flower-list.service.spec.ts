import { TestBed } from '@angular/core/testing';

import { FlowerListService } from './flower-list.service';

describe('FlowerListService', () => {
  let service: FlowerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
