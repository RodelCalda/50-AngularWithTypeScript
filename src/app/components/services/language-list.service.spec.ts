import { TestBed } from '@angular/core/testing';

import { LanguageListService } from './language-list.service';

describe('LanguageListService', () => {
  let service: LanguageListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
