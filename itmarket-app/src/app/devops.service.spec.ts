import { TestBed } from '@angular/core/testing';

import { DevopsService } from './devops.service';

describe('DevopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevopsService = TestBed.get(DevopsService);
    expect(service).toBeTruthy();
  });
});
