import { TestBed } from '@angular/core/testing';

import { PermDataService } from './perm-data.service';

describe('PermDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermDataService = TestBed.get(PermDataService);
    expect(service).toBeTruthy();
  });
});
