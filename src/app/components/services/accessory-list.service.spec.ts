import { TestBed } from '@angular/core/testing';

import { AccessoryListService } from './accessory-list.service';

describe('AccessoryListService', () => {
  let service: AccessoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
