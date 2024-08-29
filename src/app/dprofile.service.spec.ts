import { TestBed } from '@angular/core/testing';

import { DprofileService } from './dprofile.service';

describe('DprofileService', () => {
  let service: DprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
