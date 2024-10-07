import { TestBed } from '@angular/core/testing';

import { ComputerHardwareService } from './computer-hardware.service';

describe('ComputerHardwareService', () => {
  let service: ComputerHardwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerHardwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
