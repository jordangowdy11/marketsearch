import { TestBed } from '@angular/core/testing';

import { PermanantpythonService } from './permanantpython.service';

describe('PermanantpythonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantpythonService = TestBed.get(PermanantpythonService);
    expect(service).toBeTruthy();
  });
});
