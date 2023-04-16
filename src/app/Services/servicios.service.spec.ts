import { TestBed } from '@angular/core/testing';

import { SERVICIOSService } from './servicios.service';

describe('SERVICIOSService', () => {
  let service: SERVICIOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SERVICIOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
