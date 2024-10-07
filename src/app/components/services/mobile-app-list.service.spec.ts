import { TestBed } from '@angular/core/testing';

import { MobileAppListService } from './mobile-app-list.service';

describe('MobileAppListService', () => {
  let service: MobileAppListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileAppListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
