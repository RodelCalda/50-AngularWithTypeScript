import { TestBed } from '@angular/core/testing';

import { PhoneContactListService } from './phone-contact-list.service';

describe('PhoneContactListService', () => {
  let service: PhoneContactListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneContactListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
