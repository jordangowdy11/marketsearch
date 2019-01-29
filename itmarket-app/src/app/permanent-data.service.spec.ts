import { TestBed } from '@angular/core/testing';

import { PermanentDataService } from './permanent-data.service';

describe('PermanentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanentDataService = TestBed.get(PermanentDataService);
    expect(service).toBeTruthy();
  });
});
